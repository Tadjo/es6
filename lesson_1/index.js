'use strict'
/* Блочная область видимости, помимо глобальной функциональной обдасти видимости */
// let a = 'outer';
// {
//     let a = 'inner';
//     log(`Inside: ${a}`);
// }
// log(`Out: ${a}`);

/* Где использовать */
// let callbacks = [];
// for (let i = 1; i <= 10; i++) {
//     callbacks.push(function() {
//         log(i);
//     });
// }
// callbacks.forEach(function(cb) { cb()});

/* hoisting */
// console.log(hoist);
// try {
//     typeof hoist;
// } catch (error) {
//     console.log(error);
// }
// let hoist;

// 'use strict'
/* const */
const unchangable = {nested: {value: 2}};
// Object.defineProperty(unchangable, 'value', { /* writable: false, */  get() { return 10}});
Object.freeze(unchangable);
Object.getOwnPropertyNames(unchangable).forEach(function(key) {
    if (typeof unchangable[key] === "object" && unchangable[key] !== null) {
        Object.freeze(unchangable[key]);
    }
})
try {
    unchangable.value = 1;
    unchangable.nested.value = 3;
} catch (error) {
    console.log(error);
} finally {
    console.log(unchangable);
}


/* const and let не создают глобальных переменных */
// let globvar = 1;
// let globfn = function() {};
// console.log(window.globvar, window.globfn);

/* blocked scope funcitons */
// if (true) {
//     foo();
//     function foo() {
//         return true;
//     }
// }
// console.log(foo);
