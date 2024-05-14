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

function wordScore(word){
    return word.replace("a", "").length;
}

console.log(calculateScore("Hallo"));
console.log(wordScore("Hallo"))