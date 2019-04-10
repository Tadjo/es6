const sym = Symbol();
console.log(typeof sym); // symbol
const sym = new Symbol(); // TypeError: Symbol is not a constructor
// Каждый символ уникален
const sym = Symbol('optional string');
console.log(sym === Symbol('optional string')); // false
console.log(Symbol() === Symbol()); // false
console.log(sym === sym); // true

const symbolKey = Symbol('KEY');
const stringKey = 'KEY';
const library = {
    [symbolKey]: 'es6',
    [stringKey]: 'es5'
}
// Символы предотвращают случайное либо намереное переопледеление публичных данных
library['KEY'] = 'changed';
library[Symbol('KEY')] = 'changed';
console.log(library[symbolKey]); // es6 - не изменился
console.log(library[stringKey]); // es5 - изменился

const library = (function(value) {
    const private = Symbol('private');
    return {
        [private]: value,
        getValue() {
            return this[private];
        },
    };
})(2);
library.getValue(); // 2
console.log(Reflect.ownKeys(library)); // ["getValue", Symbol(private)]



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