/* Wrapper */
const wrapper = Object(sym);
console.log(typeof wrapper); // object
console.log(wrapper instanceof Symbol); // true
console.log(wrapper === sym); // false
console.log(wrapper == sym); // true
console.log({[wrapper]: 1}[sym]); // 1