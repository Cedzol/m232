function trending(rates) {
    const tuples = rates.slice(0, -1).map((rate, index) => [rate, rates[index + 1]]);
    return tuples.every(([prev, curr]) => curr > prev);
}

// Beispiel Aufrufe
console.log(trending([1, 4, 3, 8])); // ergibt false
console.log(trending([1, 2, 3, 8])); // ergibt true
