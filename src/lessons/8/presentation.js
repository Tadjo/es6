Array.from('Hello'); // ["H", "e", "l", "l", "o"]
/* Array.from может принимать функцию для маппинга вторым аргуметтом,
в данном случае мы создадим массив с текстовыми значениями всех спанов на странице*/
Array.from(document.getElementsByTagName('span'), span => span.textContent);

Array.of(1, 2, 'a', {x: 1}); // [1, 2, "a", {x: 1}]

/* Array.from/Array.of позволяют создавать экземпляры конкретного наследованного класса. */
class CustomArray extends Array {}
console.log(CustomArray.from('I am CustomArray instance') instanceof CustomArray); // true
console.log(CustomArray.of(1, 2, 3) instanceof CustomArray); // true

const target = [1, 2, 5, 8, 12, 15];

const iterator = target.entries(); // Итератор, аозвращает в качестве значений пару [key(index), value]
console.log(iterator.next()); // { done: false, value: [0, 1] }

const valueIterators = target.values(); // Итератор значений
console.log(valueIterators.next()); // { done: false, value: 1 }

const keyIterators = target.values(); // Итератор ключей
console.log(keyIterators.next()); // { done: false, value: 0 }

console.log(target.find(value => value === 5/*, thisArg(optional) */)); // 5

console.log(target.findIndex(value => value === 5/*, thisArg(optional) */)); // 2

console.log(Array.from({length: 5}).fill(1)); // [1, 1, 1, 1, 1];

/* CopyWithin не возвращает новый массив а модифицирует существующий */
console.log(target.copyWithin(3, 1, 3)); // [1, 2, 5, 2, 5, 15]

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


const map = new Map();
const symbol = Symbol();
map.set(1, '1');
// ключи могут быть любые значения
map.set({}, 'object');
map.set(symbol, 'symbol');

// Map.keys, values, entries возвращают итераторы
console.log(...map.keys()); // [1, {}, Symbol(uniq)]
console.log(...map.values()); // [1, object, symbol]
console.log(...map.entries()); // [[1, "1"], [{…}, "object"], [Symbol(uniq), "symbol"]]

map.has(symbol); // true
map.has({}); //false
map.size // 3
map.delete(1);
map.size // 2
map.clear();
map.size // 0

const weak = new WeakMap();
const target = {};
weak.set('primitive', true); // TypeError: Ключем может быть только объект
weak.set(target, 'value');
weak.get(target) === target; // true
// мы не можем очистить коллекцию
weak.clear() //


const week = new Set(['Monday', 'Tuesday', 'Thursday', 'Friday', 'Saturday']);
week.has('Monday'); // true
week.has('Sunday'); // false
week.add('Sunday').has('Sunday') // true

console.log([...week.values()]); // ["Monday", "Tuesday", "Thursday", "Friday", "Saturday", "Sunday"]
console.log([...week.keys()]); // ["Monday", "Tuesday", "Thursday", "Friday", "Saturday", "Sunday"]
console.log([...week.entries()]); // [["Monday", "Monday"],["Tuesday", "Tuesday"],["Thursday", "Thursday",["Friday", "Friday"],["Saturday", "Saturday"],["Sunday", "Sunday"]]

week.size; // 7
week.clear();
week.size; // 0


const cache = new Set();


