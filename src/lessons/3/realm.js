window.check = function(object) {
    // Как достучаться до поля с данными?
    const frame = window.frames[0];
    console.log(object instanceof Object); // false
    console.log(frame.Array === Array); // false
    console.log(frame.Symbol === Symbol); // false
}
const iframe = document.createElement('iframe');
iframe.srcdoc = `<script>
    const obj = {[Symbol('test')]: 'data'};
    window.parent.check(obj);
</script>`;
document.body.append(iframe);


window.check = function(object) {
    console.log(Symbol.keyFor(Symbol.for('test')));
    console.log(object[Symbol.for('test')]);
}
const iframe = document.createElement('iframe');
iframe.srcdoc = `<script>
    const obj = {[Symbol.for('test')]: 'data'};
    window.parent.check(obj);
</script>`;
document.body.append(iframe);