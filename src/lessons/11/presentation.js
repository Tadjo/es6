function* myGenerator(value = 2) {
    let current = value;
    while (true) {
        yield (current = current ** 2);
    }
}
const generator = myGenerator(); // Возвращает итератор
console.log(generator.next()); // {value: 4, done: false}
// Объявления генератора в классе
class Empty {
    *myGenerator() {
        /*  */
    }
}
// объявление в литералах объекта
const obj = {
    *myGenerator() {
        /*  */
    },
};

// Генератор возвращающий рандомные числа
function* Random() {
    while (true) {
        yield Math.ceil(Math.random() * 10);
    }
}

// берем рандомные числа пока не встретим число больше 8
for (random of Random()) {
    console.log(random);
    if (random > 8) {
        break;
    }
}

function* Summator() {
    const first = yield;
    const second = yield;
    yield first + second;
}

const sum = Summator();
console.log(sum.next()); // {value: undefined, done: false}
console.log(sum.next(2)); // {value: undefined, done: false}
console.log(sum.next(3)); // {value: 5, done: false}

function* Rundom() {
    while (true) {
        yield Math.random();
    }
}

// Вызов return прервет выполнение генератора
Rundom().return(`I'm done`); // {value: "I'm done", done: true}

// Блок finally позволяет обработать такое завершение генератора
function* Rundom() {
    try {
        while (true) {
            yield Math.random();
        }
    } catch (error) {
        yield 'finally';
    }
}
const gen = Rundom();
gen.return(`I'm done`); // {value: "finally", done: false}
gen.next(); // {value: "I'm done", done: true}


// generator.throw позволяет пробросить исключение в генератор
function* withException() {
    try {
        yield 1;
        yield 2;
    } catch (error) {
        console.log(`Catched: ${error}`);
    }
}

const gen = withException();
gen.next(); // {value: 1, done: false}
gen.throw('outer error'); // выведет: Catched: outer error и вернет {value: undefined, done: true}


function* nested() {
    yield 1;
    yield 2;
    yield 3;
}

function* outer() {
    yield* nested();
    yield* [4, 5, 6];
    return 'yep!!';
}
const gen = outer();
gen.next(); // {value: 1, done: false}
gen.next(); // {value: 2, done: false}
gen.next(); // {value: 3, done: false}
gen.next(); // {value: 4, done: false}
gen.next(); // {value: 5, done: false}
gen.next(); // {value: 6, done: false}
gen.next(); // {value: 'yep!!', done: true}



