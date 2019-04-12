const library = (function(value) {
    const _private = Symbol('private');
    return {
        [_private]: value,
        getValue() {
            return this[_private];
        },
    };
})(2);
library.getValue(); // 2
console.log(Reflect.ownKeys(library)); // ["getValue", Symbol(private)]
