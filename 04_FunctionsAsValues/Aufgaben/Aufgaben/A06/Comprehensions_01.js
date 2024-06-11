const numbers = Array.from({ length: 10 }, (_, i) => i + 1);
const squaredNumbers = numbers.map(n => n * n);
console.log(squaredNumbers);
