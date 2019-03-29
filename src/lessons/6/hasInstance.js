const ParentForAll = {
    [Symbol.hasInstance](value) {
        return true
    }
};
console.log({} instanceof ParentForAll); // true
console.log(2 instanceof ParentForAll); // true