Timer.prototype.start = function() {
    this.started = true; // B
    // setTimeout(() => {
    //     this.started = false; // A
    // }, this.delay);
    setTimeout(function() {
        this.started = false; // A
    }, this.delay);
};

function Timer(delay) {
    this.started = false;
    this.delay = delay;
}
const timer = new Timer(100);
timer.start();

setTimeout(() => console.log(timer.started), 200); // false