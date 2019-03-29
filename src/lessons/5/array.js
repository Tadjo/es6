'use strict';
let x, others, y, z;
[x] = [1, 2]; // x = 1
// пропустить первый элемент
[, x] = [1, 2]; // x = 2
// использование rest при деструктуризации
[x, ...others] = [1, 2, 3, 4];
// rest не обязательно должен быть переменной, это может быть pattern
[x, ...[, y, z]] = [1, 2, 3, 4]; // x = 1, y = 3, z = 4
// Деструктуризация массива работает для всех iterable
[x] = 'hello'; // x = h
try {
    [x] = null; // TypeError
} catch (error) {
    console.log(error);
}