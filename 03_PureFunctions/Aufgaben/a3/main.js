const sumOfArray = ((numArray) => {
    let arr = numArray
    return arr.reduce((a, b) => a + b, 0);
})

const meanOfArray = ((numArray) => {
    let sum = sumOfArray(numArray);
    return sum / numArray.length;
})

const sortString = ((stringArray) => {
    let sorted = stringArray.sort();
    return sorted;
})

let p_high = {
    name : "high",
    value : 1
}

let p_medium = {
    name : "medium",
    value : 2
}

let p_low = {
    name : "low",
    value : 3
}

let ph = {
    date : new Date(),
    priority : p_high,
    title : "important task"
}

ph.date = ph.date.setDate(ph.date.getDate() + 1);

let pl = {
    date : new Date(),
    priority : p_low,
    title : "unimportant task"
}

pl.date = pl.date.setDate(pl.date.getDate() + 2);

const sortWithProperties = ((objectArray) => {
    let titleSort = objectArray.sort((a, b) => a.title.localeCompare(b.title));
    let prioritySort = titleSort.sort((a, b) => a.priority.value - b.priority.value);
    return prioritySort.sort((a, b) => b.date - a.date)
})

const objArray = [
    {
        name: "Alice",
        details: {
            age: 30,
            address: {
                city: "Wonderland",
                street: "Queen Street"
            }
        },
        hobbies: ["Reading", { type: "Sports", name: "Soccer" }]
    },
    {
        name: "Bob",
        details: {
            age: 25,
            address: {
                city: "Builderland",
                street: "Construction Ave"
            }
        },
        hobbies: ["Cooking", { type: "Music", name: "Guitar" }]
    }
];

function getInnermostProperties(obj, currentPath = []) {
    let results = [];

    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            let newPath = currentPath.concat(key);
            if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
                // Recursively call for nested objects
                results = results.concat(getInnermostProperties(obj[key], newPath));
            } else if (Array.isArray(obj[key])) {
                // Recursively call for each item in the array if it's an object
                obj[key].forEach((item, index) => {
                    if (typeof item === 'object' && item !== null) {
                        results = results.concat(getInnermostProperties(item, newPath.concat(index)));
                    } else {
                        results.push({ path: newPath.concat(index), value: item });
                    }
                });
            } else {
                // Primitive value, add to results
                results.push({ path: newPath, value: obj[key] });
            }
        }
    }

    return results;
}

console.log(sumOfArray([3, 5, 9]));
console.log(meanOfArray([1, 3, 5]));
console.log(sortString(["cd","ab", "bc"]));
console.log(sortWithProperties([pl, ph]));
console.log(getInnermostProperties(objArray));
