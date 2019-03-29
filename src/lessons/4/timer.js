Timer.prototype.start = function() {
    this.started = true; // B
    // setTimeout(() => {
    //     this.started = false; // A
    // }, 100);
    setTimeout(function() {
        this.started = false; // A
    }, 100);
};

function Timer() {
    this.started = false;
}
const timer = new Timer();
timer.start();

setTimeout(() => console.log(timer.started), 200); // false