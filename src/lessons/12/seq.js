const sleep = (time, value) => () => new Promise(res => setTimeout(() => res([time, value]), time));
const st = {
    g: 'color: green',
    d: 'color: initial',
    o: 'color: orange',
};

const toExecute = Array.from({ length: 10 }).map((val, index) => sleep((index + 1) * 50, index + 1));

console.time('Seq');
let promise;
for (let step of toExecute) {
    promise = (promise ? promise.then(step) : step()).then(([time, value]) =>
        console.log(`%cTimeout: %c${time}, %cValue: %c${value}`, st.g, st.d, st.o, st.d)
    );
}
promise.then(() => {
    console.log('%cFinish', 'color: red');
    console.timeEnd('Seq');
});
