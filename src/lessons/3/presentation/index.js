

// const library = (function(delta) {
//     const res = Symbol('res');
//     const step = Symbol('sum');
//     return {
//         [res]: 0,
//         [step]: delta,
//         add() {
//             return this[res] + this[step];
//         }
//     }
// })(2);
// library.add(); // 2
// console.log(library); // { add: ƒ add(), Symbol(res): 0, Symbol(sum): 2 }
// Reflect.ownKeys(library) // ["add", Symbol(res), Symbol(sum)]


() => {/* body */}; // без параметров
x => { /* body */}; // один параметр
(x, y) => { /* body */}; // несколько параметров

/* Если тело функции представляет собой expression фигурные скобки можно пропустить*/
(x, y) => { return x*y }; // несколько параметров
(x, y) => x*y; // несколько параметров

/* Если нужно вернуть объект то его нужно обернуть в скобки */
() => ({x: 1, y: 1})

Timer.prototype.start = function() {
    this.started = true;
    setTimeout(function() {
        this.started = false; // Error
    }, 100);
}
function Timer() {
    this.started = false;
}
new Timer().start();

Timer.prototype.start = function() {
    this.started = true;
    setTimeout(() => {
        this.started = false; // Error
    }, 100);
}
function Timer() {
    this.started = false;
}
new Timer().start();

