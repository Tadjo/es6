
let title;
({ title: title } = { id: 1, title: 'ES6' }); // title = ES6

// короткая запись(тоже самое что и предыдущее)
({ title } = { id: 1, title: 'ES6' }); // title = ES6

// вложенность
({ title: { title } } = { id: 1, title: 'ES6', lesson: { id: 6, title: 'Destructing' } }); // title = 'Destructing'
({ title } = null); // TypeError

let x;
[x] = [1, 2]; // x = 1
// пропустить первый элемент
[, x] = [1, 2]; // x = 2
// использование rest при деструктуризации
[x, ...others] = [1, 2, 3, 4]; // x = 1, others = [2, 3, 4]
// rest не обязательно должен быть переменной, это может быть pattern
[x, ...[, y, z]] = [1, 2, 3, 4]; // x = 1, y = 3, z = 4
// Деструктуризация массива работает для всех iterable
[x] = 'hello'; // x = h
[x] = null; // TypeError

const [x = 1, y] = [1]; // x: 1, y: undefined
const { x, y = 2 } = { x: 1 }; // x: 1, y: 2

const { point: { x, y = 2 } = { x: 1 } } = {}; // x: 1, y: 2
const {
    point: { x, y = 2 },
} = {}; // TypeError: Cannot destructure property {x} of 'undefined' or 'null'
/* Значения по умолчанию могут вычисляться на лету */
const gety = () => 2;
const { x = 1, y = gety() } = {}; // x: 2, y: 2
/* Вы можете ссылаться на предыдущие переменные  */
const { x = 2, y = x * x } = {}; // x: 2, y: 4

const target = {};
({ key: target.key } = { key: '1' }); // {key: "1"}
[, ...target.array] = [1, 2, 3]; // target.array = [2, 3]

const foo = ([first, second = 2]) => first + second;
foo([1, 1]); // 2
foo([1]); // 3

const defaultConfig = { id: 0, name: 'My awesome config' };
function Config({ id, name } = defaultConfig) {
    this.id = id;
    this.name = name;
}
new Config(); // default {id: 0, name: 'My awesome config'};
new Config({ id: 1, name: 'Custom' }); // {id: 1, name: 'Custom'};
