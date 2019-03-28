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