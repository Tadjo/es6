const sleep = (time, value) => new Promise(res => setTimeout(() => res([time, value]), time));
let counter = 0;
const rethrow = err => {
    counter += 1;
    return Promise.reject(err);
    // or
    throw err;
};

Promise.resolve()
    .then(() => {
        throw new Error();
    })
    .catch(rethrow)
    .catch(rethrow)
    .catch(() => console.log(counter))
    .then(() => {
        console.log('Error again');
        return Promise.reject(new Error());
    })
    .catch(rethrow)
    .catch(rethrow)
    .catch(() => console.log(counter));
