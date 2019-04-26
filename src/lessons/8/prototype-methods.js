const target = [1, 2, 5, 8, 12, 15];

const iterator = target.entries(); // Итератор, аозвращает в качестве значений пару [key(index), value]
console.log(iterator.next()); // { done: false, value: [0, 1] }

const valueIterators = target.values(); // Итератор значений
console.log(valueIterators.next()); // { done: false, value: 1 }

const keyIterators = target.keys(); // Итератор ключей
console.log(keyIterators.next()); // { done: false, value: 0 }

console.log(target.find(value => value === 5/*, thisArg(optional) */)); // 5

console.log(target.findIndex(value => value === 5/*, thisArg(optional) */)); // 2

console.log(Array.from({length: 5}).fill(1)); // [1, 1, 1, 1, 1];

/* CopyWithin не возвращает новый массив а модифицирует существующий */
console.log(target.copyWithin(3, 1, 3)); // [1, 2, 5, 2, 5, 15]