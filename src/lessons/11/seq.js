const sleep = (time, value) => new Promise(res => setTimeout(() => res(value), time));

function seq(genFun) {
    const generator = genFun();
    return new Promise((resolve, rej) => {
        goNext();

        function goNext(result) {
            const next = generator.next(result);
            const value = toPromise(next.value);
            if (next.done) {
                return resolve(value);
            }
            value.then(goNext);
        }

        function toPromise(obj) {
            if (Array.isArray(obj)) {
                return Promise.all(obj.map(toPromise));
            }
            if (!isPromise) {
                return Promise.resolve(obj);
            }
            return obj;
        }

        function isPromise(obj) {
            return typeof obj.then !== 'function';
        }
    });
}

console.time('Sequence');
seq(function*() {
    console.log('first yeld start');
    const a = yield [sleep(1000, 1), sleep(1000, 2)];
    console.log('second yeld start');
    const b = yield sleep(2000, 3);
    console.log('third yeld start');
    const c = yield sleep(2000, 4);
    console.timeEnd('Sequence');
    return [a, b, c];
}).then(console.log); // [[1, 2], 3, 4]
