'use strict'
// function withBlockScope() {
//     let tst = 1;
//     if (true) {
//         let tst = 2;
//         console.log('Inside:', tst);
//     }
//     console.log('Out:', tst);
// }
// withBlockScope();
// {
//     let tst = 1;
//     if (true) {
//         let tst = 2;
//         console.log('Inside:', tst);
//     }
//     console.log('Out:', tst);
// }
// console.log(tst); // Cant access tst variable in outer scope

/* Где использовать */
// let callbacks = [];
// for (let i = 1; i <= 10; i++) {
//     callbacks.push(function() {
//         console.log(i);
//     });
// }
// callbacks.forEach(function(cb) { cb()});


/* hoisting + TDZ */
// if (1) {
//     console.log('Var:', hoistVar);
//     console.log('Let:', hoist);
//     var hoistVar;
//     const hoist;
// }


/* Immutable */
// const unchangable = {nested: {value: 2}};
// Object.defineProperty(unchangable, 'value', { /* writable: false, */  get() { return 10}, set(value) { throw new Error('immutable')}});
// Object.freeze(unchangable);
// Object.getOwnPropertyNames(unchangable).forEach(function(key) {
//     if (typeof unchangable[key] === "object" && unchangable[key] !== null) {
//         Object.freeze(unchangable[key]);
//     }
// })
// try {
//     unchangable.value = 1;
//     unchangable.nested.value = 3;
// } catch (error) {
//     console.log(error);
// } finally {
//     console.log(unchangable);
// }

/* blocked scope funcitons */
// if (1) {
//     inside();
//     function inside() {
//         return true;
//     }
// }
// console.log(inside);

/* const and let не создают глобальных переменных */
// let globvar = 1;
// let globfn = function() {};
// console.log(window.globvar, window.globfn);

/* function declaration не создают глобальных переменных  */
// function glob() {};
// console.log(glob);
// console.log(window.glob);

/* class declaration не создаen глобальных переменных  */
// class notGlobal {};
// console.log(notGlobal);
// console.log(window.notGlobal);
