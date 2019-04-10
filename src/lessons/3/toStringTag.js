// Symbol.toStringtag
function customArray() {
    Array.apply(this);
}
customArray.prototype[Symbol.toStringTag] = 'customArray';
console.log(Object.prototype.toString.call(new customArray())) //"[object customArray]"
console.log(new customArray().toString()); //"[object customArray]"