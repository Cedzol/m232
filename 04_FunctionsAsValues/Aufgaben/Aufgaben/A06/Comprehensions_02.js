const numbers = Array.from({ length: 20 }, (_, i) => i + 1);
const evenNumbers = numbers.filter(n => n % 2 === 0);
console.log(evenNumbers);
