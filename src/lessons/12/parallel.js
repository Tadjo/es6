const sleep = (time, value) => new Promise(res => setTimeout(() => res([time, value]), time));
const st = {
    g: 'color: green',
    d: 'color: initial',
    o: 'color: orange',
};

if (0) {
    const toExecute = Array.from({ length: 10 }).map((val, index) => () => sleep((index + 1) * 50, index + 1));

    console.time('Parallel');
    Promise.all(
        toExecute.map(fn =>
            fn().then(([time, value]) =>
                console.log(`%cTimeout: %c${time}, %cValue: %c${value}`, st.g, st.d, st.o, st.d)
            )
        )
    ).then(() => {
        console.log('%cFinish', 'color: red');
        console.timeEnd('Parallel');
    });
}

if (1) {
    // Handle Error
    Promise.all([
            sleep(100, 1),
            Promise.reject(new Error('Unexpected error')).catch(err => err),
            sleep(200, 2),
        ])
        .then(results => {
            results.forEach(res => {
                if (res instanceof Error) {
                    console.log(`%cError: ${res.message}`, 'color: red');
                } else {
                    const [time, value] = res;
                    console.log(`%cTimeout: %c${time}, %cValue: %c${value}`, st.g, st.d, st.o, st.d);
                }
            });
        })
        .catch(console.log);
}
