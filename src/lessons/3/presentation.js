const sym = Symbol();
console.log(typeof sym); // symbol
const sym = new Symbol(); // TypeError: Symbol is not a constructor
// Каждый символ уникален
const sym = Symbol('optional string');
console.log(sym === Symbol('optional string')); // false
console.log(Symbol() === Symbol()); // false
console.log(sym === sym); // true

const publicApiSymbol = Symbol('KEY');
const publicApiKey = 'KEY';
const library = {
    [publicApiSymbol]: 'es6',
    [publicApiKey]: 'es5'
}
// Символы предотвращают случайное либо намереное переопледеление публичных данных
library['KEY'] = 'changed';
library[Symbol('KEY')] = 'changed';
console.log(library[publicApiSymbol]); // es6 - не изменился
console.log(library[publicApiKey]); // es5 - изменился


const library = (function(delta) {
    const res = Symbol('res');
    const step = Symbol('sum');
    return {
        [res]: 0,
        [step]: delta,
        add() {
            return this[res] + this[step];
        }
    }
})(2);
library.add(); // 2
console.log(library) // {add: ƒ, Symbol(res): 0, Symbol(sum): 2}
console.log(Reflect.ownKeys(library)) // ["add", Symbol(res), Symbol(sum)]


// Поддерживает явное и неявное преобразование к boolean
const sym = Symbol('conversion');
console.log(Boolean(sym)); //true
console.log(!sym); // false

// Приведение к number явно/неявно приведет к TypeError
+sym; // TypeError: Cannot convert a Symbol value to a number
Number(sym); // TypeError: Cannot convert a symbol value to a number

// Приведение к сроке разрешено только в явном виде
`${sym}`; // TypeError: cannot convert a Symbol to a string
String(sym); // Symbol(conversion)
Object.prototype.toString.call(sym); // '[object Symbol]'


// Пояснение
const symbol = Symbol('test');
window.check = function(object) {
    const frame = window.frames[0];
    console.log(object instanceof Object); // false
    console.log(frame.Array === Array); // false
    console.log(frame.Symbol === Symbol); // false
    console.log(frame.Symbol('test') === symbol); // false
}
const iframe = document.createElement('iframe');
iframe.srcdoc = "<script>window.parent.check({})</script>";
document.body.append(iframe);


const symbol = Symbol.for('test');
/* */
window.check = function(object) {
    /* */
    console.log(frame.Symbol.for('test') === symbol); // true
}
/* */



/* Object.assign */
Object.assign({}, {[Symbol()]: true}); // {Symbol(): true}