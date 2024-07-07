const fs = require('fs');
const prompt = require('prompt-sync')();

const addScore = (scores, name, score, difficulty, date) => {
    const existingScores = scores.filter(s => s.difficulty === difficulty);
    if (existingScores.length < 10 || existingScores.some(s => s.score < score)) {
        const newScores = existingScores.concat({ name, score, difficulty, date });
        const sortedScores = newScores.sort((a, b) => b.score - a.score).slice(0, 10);
        const otherScores = scores.filter(s => s.difficulty !== difficulty);
        const finalScores = sortedScores.concat(otherScores);
        const rank = findIndex(filterDifficulty(finalScores, difficulty), name, score, difficulty, date);
        logRank(rank);
        return finalScores;
    } else {
        const lowestScores = getLowestScore(existingScores)
        insufficientScore(lowestScores);
        main();
        return scores;
    }
};

const logRank = (rank) => {
    console.log("Your rank: " + rank)
}

const insufficientScore = (lowestScore) => {
    console.log("HighScore entries only better than " + lowestScore + " accepted");
}

const filterDifficulty = (scores, difficulty) => {
    return scores.filter(s => s.difficulty === difficulty);
}

const findIndex = (scores, name, score, difficulty, date) => {
    return scores.findIndex(s => s.name === name && s.score === score && s.difficulty === difficulty && s.date === date) + 1;
}

const getLowestScore = (scores) => {
    return scores[scores.length -1].score;
}

const sortScores = (scores) => {
    const difficultyOrder = ['Einfach', 'Mittel', 'Schwer', 'Genie'];
    const difficultyRank = (difficulty) => difficultyOrder.indexOf(difficulty);

    return scores.sort((a, b) => {
        if (difficultyRank(a.difficulty) !== difficultyRank(b.difficulty)) {
            return difficultyRank(a.difficulty) - difficultyRank(b.difficulty);
        } else {
            return b.score - a.score;
        }
    });
};

const updateHighScoresFile = (filePath, newScores) => {
    const sortedScores = sortScores(newScores);
    fs.writeFileSync(filePath, JSON.stringify(sortedScores, null, 2), 'utf8');
    return sortedScores;
};

const readHighScores = (filePath) => {
    try {
        const data = fs.readFileSync(filePath, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        return [];
    }
};

const checkExpression = (exp) => {
    return typeof exp === 'string' || exp instanceof String
}

const checkNumber = (num) => {
    return typeof Number(num) === 'number' && !isNaN(num);
}

const checkQuit = (input) => {
    const lowInput = input.toLowerCase();
    if (lowInput === 'quit' || lowInput === 'q' || lowInput === 'exit'){
        throw 'Exited programm';
    }
}

const getNameInput = () => {
    const inputName = prompt("name: ");
    checkQuit(inputName);
    if (!checkExpression(inputName)){
        console.log("Not a valid name")
        main();
    }
    return inputName
}

const getScoreInput = () => {
    const inputScore = prompt("score: ");
    checkQuit(inputScore);
    if (!checkNumber(inputScore)){
        console.log("Not a number")
        main();
    }
    return Number(inputScore);
}
const getDifficulty = () => {
    const inputDifficulty = prompt("difficulty [Einfach, Mittel, Schwer, Genie]: ");
    checkQuit(inputDifficulty);
    return inputDifficulty;
}


const main = () => {
    console.log("Menu")
    console.log("1: Make new entry");
    console.log("2: Sort entry");
    const menuOption = prompt("")
    checkNumber(menuOption);
    if (Number(menuOption) === 1){
        logEntry();
    } else if (Number(menuOption) === 2){
        sortEntry();
    } else {
        main();
    }
};

const logEntry = () => {
    const filePath = './highScores.json';
    const name = getNameInput();
    const score = getScoreInput();
    const difficulty = getDifficulty();
    const date = new Date();
    const currentScores = readHighScores(filePath);
    const newScores = addScore(currentScores, name, score, difficulty, date);
    updateHighScoresFile(filePath, newScores);
    main();
}

const logSortedEntries = (entries) => {
    console.log(entries);
}

const sortEntry = () => {
    const filePath = './highScores.json';
    const currentScores = readHighScores(filePath)
    const difficulty = getDifficulty();
    const filteredDifficulties = filterDifficulty(currentScores, difficulty);
    logSortedEntries(filteredDifficulties);
    main();
}

main();
