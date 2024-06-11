// Gegebene Liste von Listen
const lists = [[1, 2], [3, 4], [5, 6]];

// Verwenden von flatMap, um alle Elemente zu verdoppeln und in einer neuen Liste zu sammeln
const doubled = lists.flatMap(sublist => sublist.map(number => number * 2));

console.log(doubled); // Ausgabe: [2, 4, 6, 8, 10, 12]
