/* Object.assign */
const source = {[Symbol()]: true};
const assign = Object.assign({}, source); // {Symbol(): true}
console.log(assign);
