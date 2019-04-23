console.log(NaN === NaN); // false
console.log(+0 === -0); // false
console.log(Object.is(NaN, NaN)); // true
console.log(Object.is(+0, -0)); // true

console.log([1, 2, NaN].findIndex(Object.is.bind(null, NaN))); // 2