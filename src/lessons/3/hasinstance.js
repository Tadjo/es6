const Custom = {
    [Symbol.hasInstance](instance) {
        return instance.hasOwnProperty('custom') ? true : false;
    }
};

console.log({} instanceof Custom);
console.log({custom: true} instanceof Custom);