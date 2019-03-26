
Timer.prototype.start = function() {
    this.started = true; // B
    setTimeout(() => {
        this.started = false; // A
    }, 100);
};
function Timer() {
    this.started = false;
}
const timer = new Timer().start();
setTimeout(console.log(timer.started), 200)(
    // false

    () => console.log(arguments)
)(); // ReferenceError: arguments is not defined
let foo = (function() {
    return () => console.log(arguments);
})(1, 2, 3); // [1, 2, 3]
foo();

const greet = (name = 'Jhon') => {
    return `Hello ${name}`;
};
greet(); // Hello Jhon
greet(undefined); // Hello Jhon
greet('Sara'); // Hello Sara

const foo = (x = 2, y = x * x) => {
    return x * y;
};
foo(); // 8
foo(1); // 1

const outer = 2;
const foo = (x = 2, y = () => outer) => {
    return x * y();
};
foo(); // 4
foo(1); // 2

const max = (...args) => {
    console.log(Object.prototype.toString.call(args)); //[object Array]
    console.log(args); // [10, 20]
};
max(10, 20);

const summ = (initial, ...args) => {
    // initial: 2, args: [5, 8]
    args.reduce((prev, cur) => (prev += cur), initial);
};
summ(2, 5, 8);

// es5
const max = Math.max.apply(null, [10, 20, 8, 22]); // 22
// es6
const max = Math.max(...[10, 20, 8, 22]); // 22
// Делаем плоскую структуру изи массивов/объектов
const flatten = [...[1, 2], 3, 4]; // [1, 2, 3, 4]
const flattenObject = { ...{ x: 1 }, y: 2 }; // {x: 1, y: 2}
// Копируем масиив или объект(аналогично с объектами)
const source = [1, 2];
const copy = [...source]; // [1, 2], source !== copy

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
