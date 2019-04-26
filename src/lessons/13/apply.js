const proxy = new Proxy(Array.prototype.concat, {
    apply(target, thisArg = [1, 2], argumentList) {
        return Reflect.apply(target, thisArg, argumentList);
        // или
        // return target.apply(this, arguments)
    }
});

/* Apply */
console.log(proxy([3, 4]));
console.log(proxy.call(['this'], 3, 4));
console.log(proxy.apply(['this'], [3, 4]));
