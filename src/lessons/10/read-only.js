// moduleA
export let counter = 0;
export function add(vaue) { counter += value}

// module B
import {counter, add} from 'moduleA';

console.log(counter); // 0
add(2);
console.log(counter); // 2

// Попытка изменить значение импортированного значения
counter++; // TypeError
