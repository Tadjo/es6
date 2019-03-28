const sym = Symbol();
console.log(typeof sym); // symbol
const sym = new Symbol(); // TypeError: Symbol is not a constructor
// Каждый символ уникален
const sym = Symbol('optional string');
console.log(sym === Symbol('optional string')); // false
console.log(Symbol() === Symbol()); // false
console.log(sym === sym); // true