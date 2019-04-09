const numbers = Array.from({length: 10}).map((v, i) => i+1);

/* For of */
for (let num of numbers) {
    console.log(num);
}

/* Spread */
console.log('Spread', ...numbers);

/* Set */
console.log(new Set(numbers));
/* Map */
console.log(new Map(numbers.map(v => [v, v**2])));


/* Promise */
Promise.all([1, 2, 3].map(v => Promise.resolve(v)));
Promise.race([1, 2, 3].map(v => Promise.resolve(v)));

/* Generators */
function * generator() {
    yield* numbers;
}
console.log('Generator: ', ...generator());

