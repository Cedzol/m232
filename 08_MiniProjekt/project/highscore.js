const fs = require('fs');
const filePath = './highScores.json';

// Pure function to add a new score to the list
const addScore = (scores, name, score) => {
    const newScores = scores.concat({ name, score });
    return newScores;
};

// Pure function to sort scores in descending order
const sortScores = (scores) => {
    const sortScores = scores.slice().sort((a, b) => b.score - a.score);
    return sortScores;
};

// Function to update the high score list in the file
const updateHighScoresFile = (filePath, newScores) => {
    const sortedScores = sortScores(newScores);
    fs.writeFileSync(filePath, JSON.stringify(sortedScores, null, 2), 'utf8');
    return sortedScores;
};

// Function to read the current high scores from the file
const readHighScores = (filePath) => {
    try {
        const data = fs.readFileSync(filePath, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        return [];
    }
};

// Main function to add a new score and update the file
const main = (name, score) => {
    const currentScores = readHighScores(filePath);
    const newScores = addScore(currentScores, name, score);
    const updatedScores = updateHighScoresFile(filePath, newScores);
    console.log('High Scores:', updatedScores);
};

// Example usage: add a new score
const name = 'Ann';
const score = 89;
main(name, score);

const name2 = 'Ben';
const score2 = 92;

main(name2, score2);

const name3 = 'Alice';
const score3 = 94;

main(name3, score3)

const name4 = 'Silvia';
const score4 = 87;

main(name4, score4);