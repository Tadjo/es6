// function Point в es5
class Point {
    // Конструктор является телом функции в es5
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    // Метод класса является свойстовм прототипа функции-конструктора Point.Prototype.toString
    toString() {
        `x: ${this.x}, y: ${this.y}`;
    }
}

// es5
function Description() {};
Description.getDescription = () => `I'm static method`;
// es6
class Description {
    static getDescription() {
        return `I'm static method`
    }
}

Description.getDescription(); // I'm static method


class Bear {
    constructor(age, weight) {
        Object.assign({ace, weight}, this);
    }

    eat() {
        console.log('I like fish, berries and honey');
    }
}

class Panda extends Bear {
    constructor(age, weight, zoo) {
        super(age, weight); // Вызывает и исполняет родительский конструктор
        Object.assign({zoo}, this);
    }
    eat() {
        // override parent method
        console.log('I eat only leaves, stems and shoots of bamboo');
    }
}


class Bear {
    static speak() {
        console.log('I m bear');
    }
}
class Panda extends Bear {
    static speak() {
        super.speak();
        console.log('And I also a Panda');
    }
}
Panda.speak(); // I m bear And I also a Panda



class CustomArray extends Array {
    // Конструктор не обязателен, можно опустить
    constructor(len) {
        super(len);
    }
}

const myCustomArray = new CustomArray(2);
myCustomArray instanceof CustomArray; // true
myCustomArray.length // 2
myCustomArray.fill(1); // [1, 1]
myCustomArray.length = 3; // [1, 1, empty]


// species
{
    class CustomArray extends Array {}
    const arr = new CustomArray();
    arr.map(el => el); // новый экземпляр
    arr instanceof CustomArray; // true

    class CustomArray extends Array { static get [Symbol.species]() { return Array} }
    // или
    Object.defineProperty(CustomArray, Symbol.species, { value: Array});

    arr instanceof CustomArray; // false, теперь map возвращает экземпляр родительского класса
}






