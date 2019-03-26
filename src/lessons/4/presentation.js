() => {
    /* body */
}; // без параметров
X => {
    /* body */
}; // один параметр
(x, y) => {
    /* body */
}; // несколько параметров

/* Если тело функции представляет собой expression фигурные скобки можно пропустить */
(x, y) => {
    return x * y;
}; // несколько параметров
(x, y) => x * y; // несколько параметров

/*  Если нужно вернуть объект то его нужно обернуть в скобки */
() => ({ x: 1, y: 1 });

TimeRanges.prototype.start = function() {
    this.started = true; // B
    setTimeout(() => {
        this.started = false; // A
    }, 100);
};

function Timer() {
    this.started = false;
}
const timer = new Timer().start();
setTimeout(() => console.log(timer.started), 200); // false

const fn = () => console.log(arguments);
fn(); // ReferenceError: arguments is not defined

const fn = function() {
    return () => console.log(arguments);
};
fn(1, 2, 3)(); // [1, 2, 3], Аргументы были захвачены из родительской функции

const greet = (name = 'Jhon') => {
    return `Hello ${name}`;
};

greet(); // Hello Jhon
greet(undefined); // Hello Jhon
greet('Shara'); // Hello Sara

const foo = (x = 2, y = x * x) => {
    return x * y;
};
foo(); // 8

const outer = 2;
const foo = (x = 2, y = () => outer) => {
    return x * y();
};
foo(); // 4


const max = (...args) => {
    console.log(Object.prototype.toString.call(args)); // [object Array]
    console.log(args); // [10, 20]
    return Math.max.apply(null, args);
}
max(10, 20); // 20

const summ = (initial, ...args) => { // initial: 2, args: [5, 8]
    return args.reduce((prev, cur) => prev += cur, initial);
}
summ(2, 5, 8); // 15

// es5
const max = Math.max.apply(null, [10, 20, 8, 22]); // 22
// es6
const max = Math.max(...[10, 20, 8, 22]); //22
// Делаем плоскую структуру из массива/объектов
const flatted = [...[1, 2], 3, 4, ...[5, 6]]; // [1, 2, 3, 4, 5, 6]
const flattenObject = {...{x: 1}, ...{y: 2}, z: 3}; // {x: 1, y: 2, z: 3}
// Коируем массив или объект(аналогично с объектами)
const source = [1, 2];
const copy = [...source]; // [1, 2]. source !== copy
