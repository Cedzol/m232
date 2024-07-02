const fs = require('fs');
const filePath = './highScores.json';
const prompt = require('prompt-sync')();

const addScore = (scores, name, score) => {
    const newScores = scores.concat({ name, score });
    return newScores;
};

const sortScores = (scores) => {
    const sortScores = scores.slice().sort((a, b) => b.score - a.score);
    return sortScores;
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

const logResults = (updatedScore) => {
    console.log(updatedScore);
}

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

const main = () => {
    const name = getNameInput();
    const score = getScoreInput();
    const currentScores = readHighScores(filePath);
    const newScores = addScore(currentScores, name, score);
    const updatedScores = updateHighScoresFile(filePath, newScores);
    logResults(updatedScores);
    main();
};
