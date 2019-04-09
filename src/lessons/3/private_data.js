const method = Symbol('method');
const path = Symbol('path');
const library = (function(value) {
    return {
        [method]: () => value,
        [path]: './some/path/to/target',
    }
})(2);
library.method(); // 2
library.path; // './some/path/to/target'
console.log(library) // {add: ƒ, Symbol(res): 0, Symbol(sum): 2}
console.log(Reflect.ownKeys(library)) // ["add", Symbol(res), Symbol(sum)]