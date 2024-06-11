// Gegebene Liste von Personen
const people = [
    ["Max", ["Blau", "Grün"]],
    ["Anna", ["Rot"]],
    ["Julia", ["Gelb", "Blau", "Grün"]]
];

// Verwenden von flatMap, um alle Lieblingsfarben in einer flachen Liste zu sammeln
const allColors = people.flatMap(person => person[1]);

// Entfernen von doppelten Farben, um eine Liste einzigartiger Farben zu erstellen
const uniqueColors = [...new Set(allColors)];

console.log(uniqueColors); // Ausgabe: ["Blau", "Grün", "Rot", "Gelb"]
