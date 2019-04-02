class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static greet() {
        console.log('point me');
    }

    toString() {
        return `x: ${this.x}, y: ${this.y}`;
    }

    get z() {
        return this._z;
    }

    set z(z) {
        this._z = z;
    }

    *getData() {
        yield this.x;
        yield this.y;
    }
}

const point = new Point(10, 20);
Point.greet();
console.log(point.toString());
point.z = 4;
console.log(point.z);
console.log(point.getData().next()); //{value: 10, done: false};

console.dir(Point); // здесть статический метод
console.dir(point.__proto__); // здесь все остальное