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