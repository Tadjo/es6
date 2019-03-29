const max = (...args) => {
    console.log(Object.prototype.toString.call(args)); // [object Array]
    console.log(args); // [10, 20]
    return Math.max.apply(null, args);
}
max(10, 20); // 20

const summ = (initial, ...args) => { // initial: 2, args: [5, 8]
    return args.reduce((prev, cur) => prev += cur, initial);
}
summ(2, 5, 8); // 15