const promise = new Promise((resove, reject) => {
    setTimeout(() => resove(1), 100);
});

promise.then(console.log); // 1

Promise.resolve(100);
//Эквивалентно
new Promise(resolve => {
    resolve(100);
});

Promise.reject(new Error('oops')).catch(err => console.log(`Error catched: ${err.message}`));

const promise = new Promise((resove, reject) => {
    setTimeout(() => {
        resove(1);
    }, 2000);
});

promise // value: 1
    .then(fromFirst => fromFirst + 1) // value: 2, js сам обернет результат выполнения в promise.resolve
    .then(fromSecond => Promise.resolve(fromSecond + 1)) // value: 3
    .then(fromThird => console.log(fromThird));

Promise.resolve()
    .then(res => 'There are no errors')
    .catch(err => console.log(`${err.message}!!!!!!`)) // не будет вызвано
    .then(() => {
        throw new Error('Error in promise');
    })
    .catch(err => console.log(err.message)) // обработает ошибку
    .then(() => console.log('hey')); // выведет hey

const promises = [1, 2, 3].map(val => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(val), val * 1000);
    });
});
Promise.all(promises).then(console.log); // [1, 2, 3] через 3 секунды
// Ошибка приведет к прерыванию выполнения
const promises = [1, 2, 3].map(val => {
    return new Promise((resolve, reject) => {
        setTimeout(() => (val !== 2 ? resolve(val) : reject(val)), val * 1000);
    });
});
Promise.race(promises)
    .then(console.log) // 1
    .catch(console.log); // Не произойдет, промис на момент ошибки уже успешно завершен

let res;
Promise.resolve()
    .then(() => {
        throw new Error('invalid data');
    })
    .catch(() => console.log('Oopts, error occured')) // Обработается
    .finally(() => (res = 2)); // Выполнит код в любом случае

//