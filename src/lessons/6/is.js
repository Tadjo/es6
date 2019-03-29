console.log(NaN === NaN); // false
console.log(Object.is(NaN, NaN)); // true

console.log([1, 2, NaN].findIndex(Object.is.bind(null, NaN))); // 2