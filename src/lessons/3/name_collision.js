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
console.log(Reflect.ownKeys(library));