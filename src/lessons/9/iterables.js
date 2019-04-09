/* String */
console.log([...'Hello'])
console.log(new Set('Hello'));
/* Array */
console.log([...[1,2], ...[3,4]]);
/* Arguments */
function args() {
    console.log(arguments instanceof Array);
    console.log(...arguments);
}
args(1, 2, 3, 4, 5)
/* Map */
console.log([...new Map().set(1, true).set(2, false)]);
/* Set */
console.log(...new Set('exclude dicplicate'));