/* Итерируемый объект должен реализовать метод Symbol.iterator возвращающий итератор */
// interface Iterable {
//     [Symbol.iterator]() : Iterator;
// }
// interface Iterator {
//     next() : IteratorResult; // метод который возвращает слудубщий елемент итерируемого объекта
// }
// interface IteratorResult {
//     value: any; // текущее значение
//     done: boolean; // закончен ли перебор
// }

const stringIterator = 'hy'[Symbol.iterator]();
console.log(stringIterator.next());
console.log(stringIterator.next());
console.log(stringIterator.next());
// {value: "h", done: false}
// {value: "y", done: false}
// {value: undefined, done: true}

const mapIterator = new Map().set(1, 'hello')[Symbol.iterator]();
mapIterator.
console.log(mapIterator.next());
console.log(mapIterator.next());
// {value: [1, hello], done: false}
// {value: undefined, done: true}

class Range {
    constructor(from, to) {
        this.from = from;
        this.to = to;
    }
    [Symbol.iterator]() {
        const to = this.to;
        let current = this.from;
        return {
            next() {
                if (current <= to) {
                    return { value: current++, done: false };
                } else {
                    return { value: undefined, done: true };
                }
            },
        };
    }
}
console.log(...new Range(10, 20)); // 10 11 12 13 14 15 16 17 18 19 20
