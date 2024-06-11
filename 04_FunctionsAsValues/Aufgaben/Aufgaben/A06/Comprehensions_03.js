const colors = ["Red", "Green", "Blue"];
const fruits = ["Apple", "Banana", "Orange"];
const pairs = colors.flatMap(color => fruits.map(fruit => [color, fruit]));
console.log(pairs);
