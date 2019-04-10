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
