const toWrap = Symbol();
const wrapper = Object(toWrap);
console.log(typeof wrapper); // object
console.log(wrapper instanceof Symbol); // true
console.log(wrapper === toWrap); // false
console.log(wrapper == toWrap); // true
console.log({[wrapper]: 1}[toWrap]); // 1