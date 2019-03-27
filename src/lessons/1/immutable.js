const unchangable = { nested: { value: 2 } };
// Object.defineProperty(unchangable, 'value', {
//     // writable: false,
//     get() {
//         return 10;
//     },
//     set(value) {
//         throw new Error('immutable');
//     },
// });

// function deepFreeze(value) {
//     if (typeof value === 'object' && value !== null) {
//         Object.freeze(value);
//         Object.getOwnPropertyNames(value).forEach(function(key) {
//             deepFreeze(value[key]);
//         });
//     }
// }
// deepFreeze(unchangable);

try {
    unchangable.value = 1;
    // unchangable.nested.value = 3; // check deep
} catch (error) {
    console.group('error');
    console.log(error);
    console.groupEnd();
} finally {
    console.group('finally');
    console.dir(JSON.stringify(unchangable));
    console.groupEnd();
}
