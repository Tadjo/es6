class Base {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

const proxy = new Proxy(Base, {
    construct(target, argumentList) {
        console.log(`Constructor for Base class was invoked with following arguments [${argumentList}]`)
        return new target(...argumentList);
    }
});


console.log(new proxy(3, 4));