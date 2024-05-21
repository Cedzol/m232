let doubleMap = [1, 2, 3, 4, 5]

doubleMap = doubleMap.map(x => x * 2);

let namesCap = ["Alice", "Bob", "Charlie"]
namesCap = namesCap.map(x => x.toUpperCase())

let divideMap = [12, 45, 68, 100]
divideMap = divideMap.map(x => x / 2);

address1 = {
    strasse : "Hauptstrasse",
    hausnummer : "10",
    postleitzahl : "12345",
    stadt : "Musterstadt"
}

address2 = {
    strasse : "Nebenstrasse",
    hausnummer : "5",
    postleitzahl : "23456",
    stadt : "Beispielburg"
}

let addresses = [address1, address2]

let firstCap = ["Max Mustermann", "Erika Mustermann"]
firstCap = firstCap.map(x => x.split(" ")[0].toUpperCase())

console.log(doubleMap)
console.log(namesCap)
console.log(divideMap)
addresses.map(x => console.log(x.strasse + " " + x.hausnummer + ", " + x.postleitzahl + " " + x.stadt))
console.log(firstCap)
