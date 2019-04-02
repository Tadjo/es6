for (const x of [1, 2, 3]) {
    console.log(x);
    if (x === 2) break;
}
// Можно применять дестуртурирование
for (const [index, value] of [1, 2, 3].entries()) {
    console.log(`Index: ${index}, value: ${value}`);
}
// В качестве итерируемой переменной может использоваться не только переменная
const obj = {};
for (obj.iterate of 'hey') {
    console.log(obj.iterate); // h(1) e(2) y(3)
}
console.log(obj.iterate) // y;