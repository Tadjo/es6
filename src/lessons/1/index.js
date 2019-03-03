'use strict'

// function withBlockScope() {
//     var tst = 1;
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
// for (var i = 1; i <= 5; i++) {
//     // Solution 1 
//     (function() {
//         var k = i;
//         callbacks.push(function() {
//             console.log(k**2);
//         });
//     })();
//     // Solution 2 
//     callbacks.push(function(i) {
//         console.log(i**2);
//     }.bind(null, i));
// }
// es6 way
// for (let i = 1; i <= 5; i++) {
//     callbacks.push(function () {
//         console.log(i ** 2);
//     });
// }
// callbacks.forEach(function(cb) { cb()});


/* hoisting + TDZ */
// if (1) {
//     console.log('Var:', hoistVar);
//     console.log('Let:', hoist);
//     var hoistVar;
//     let hoist;
// }

// TDZ is time zone, not code zone
// if (1) {
//     function tryGetLet() {
//         console.log(tdz);
//     }
//     // tryGetLet() // Error TDZ
//     let tdz;
//     tryGetLet();
// }


/* Immutable */
// const unchangable = {nested: {value: 2}};
// Object.defineProperty(unchangable, 'value', { /* writable: false, */  get() { return 10}, set(value) { throw new Error('immutable')}});

// function deepFreeze(value) {
//     if (typeof value === "object" && value !== null) {
//         Object.freeze(value);
//         Object.getOwnPropertyNames(value).forEach(function(key) {
//             deepFreeze(value[key]);
//         });
//     }
// }
// deepFreeze(unchangable)
// try {
//     unchangable.value = 1;
//     // unchangable.nested.value = 3;
// } catch (error) {
//     console.group('error');
//     console.log(error);
//     console.groupEnd();
// } finally {
//     console.group('finally');
//     console.dir(JSON.stringify(unchangable));
//     console.groupEnd();
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
