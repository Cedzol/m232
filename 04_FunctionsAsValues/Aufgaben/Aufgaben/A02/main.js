let evenNumbers = [1, 2, 3, 4, 5]
evenNumbers = evenNumbers.filter(x => x % 2 === 0)

let more4chars = ["Alice", "Bob", "Charlie", "Diana"]
more4chars = more4chars.filter(x => x.length > 4)

let moreThan50 = [12, 45, 68, 100]
moreThan50 = moreThan50.filter(x => x > 50)

let sStart = ["Scala", "ist", "fantastisch"]
sStart = sStart.filter(x => x.charAt(0).toUpperCase() === "S")

let buch1 = {
    name :"1984",
    autor: "George Orwell",
    jahr: 1949
    }
let buch2 = {
    name: "Brave New World",
    autor: "Aldous Huxley",
    jahr: 1932
}
let buch3 = {
    name: "Fahrenheit 451",
    autor: "Ray Bradbury",
    jahr: 1953
}

let buchList = [buch1, buch2, buch3]
buchList = buchList.filter(x => x.jahr < 1950).map(x => x.name);


console.log(evenNumbers)
console.log(more4chars)
console.log(moreThan50)
console.log(sStart)
console.log(buchList)