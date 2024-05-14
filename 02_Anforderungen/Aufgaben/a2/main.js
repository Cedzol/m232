const prompt = require('prompt-sync')();

let wordList = [];

const readInput = (()=> {
    return prompt("Input: ");
})

const calculateScore = ((word) => {
    let score = 0;
    let array = word.split("");
    for (let i = 0; i < array.length; i++)
    {
        if (array[i] !== ("a")){
            score++
        }
    }

    return score;
});

const sortList = ((wordList) => {
    return wordList.sort((a, b) => {
        return b.score - a.score;
    })
})

while (true){
    const input = readInput();

    const score = calculateScore(input);

    let word = {
        score : score,
        word: input
    }

    wordList.push(word);
    sortList(wordList);
    console.log(wordList);
}



