const symbol = Symbol('test');
window.check = function(object) {
    const frame = window.frames[0];
    console.log(object instanceof Object); // false
    console.log(frame.Array === Array); // false
    console.log(frame.Symbol === Symbol); // false
    console.log(frame.Symbol('test') === symbol); // false
}
const iframe = document.createElement('iframe');
iframe.srcdoc = "<script>window.parent.check({})</script>";
document.body.append(iframe);


const symbol = Symbol.for('test');
/*  */
window.check = function(object) {
    /* */
    console.log(frame.Symbol.for('test') === symbol); // true
}
/*  */