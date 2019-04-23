const x = 1;
const y = 1;
function foo() {
    /* body */
}
const point = { x, y, foo };
// Тоже самое что и
const point = { x: x, y: y, foo: foo };

const obj1 = {
    func() {
        console.log('From method shorthand');
    },
    *generator() {
        yield 1;
    },
};
// Эквивалентно следующему
const obj2 = {
    func: function() {
        console.log('From method shorthand');
    },
    generator: function*() {
        yield 1;
    },
};

// es5
const object1 = {};
object['x' + '_0'] = 2;
object['dinamic' + '_func'] = function() {
    /*  */
};
// es6
const object = {
    ['x' + '_0']: 2,
    ['dinamic' + '_func']() {
        /*  */
    },
};

// assign
const target = { x: 1, z: 2 };
const source = { y: 2, z: 3 };
Object.assign(target, source); // {x: 1, y: 2, z: 3(overrided)};

// getOwnPropertySymbols
Object.getOwnPropertySymbols(JSON); //[Symbol(Symbol.toStringTag)]

// Object is
NaN === NaN; // false
Object.is(NaN, NaN); // true

[1, 2, NaN].find(Object.is.bind(null, NaN)); // 2

const a = {}, b = {};
Object.setPrototypeOf(b, a);
Object.getPrototypeOf(b) === a; // true

// proto
const ancestor = { getMe: 'yep!!' };
const descendant = {};
descendant.__proto__ = ancestor;
console.log(descendant.getMe); // yep!!
// Или в литералах
const ancestor = { getMe: 'yep!!' };
const descendant = { __proto__: ancestor };
console.log(descendant.getMe); // yep!!
// __proto__ не работает для динамических свойств
const ancestor = { getMe: 'yep!!' };
const descendant = { ['__proto__']: ancestor };
console.log(descendant.getMe); // undefined!!

// Symbol.hasInstance

const ParentForAll = {
    [Symbol.hasInstance](value) {
        return true;
    },
};
console.log({} instanceof ParentForAll); // true
console.log(2 instanceof ParentForAll); // true

// Symbol.toPromitive
const course = {
    lessons: ['tick', 'tack'],
    [Symbol.toPrimitive](hint) {
        // hint is (number | string | default)
        switch (hint) {
            case 'number':
                return this.lessons.length;
            case 'string':
                return this.lessons.join(',');
            case 'default':
                return this.lessons.length;
            default:
                throw new Error();
        }
    },
};

console.log(course + 1); // 2 + 1 = 3
console.log(course * 3); // 2 * 3 = 6
console.log(course == 2); // true
console.log(String(course)); // tick tack

// Symbol.toStringtag
function customArray() {
    Array.apply(this);
}
customArray.prototype[Symbol.toStringTag] = function() {
    return 'customArray';
};
console.log(Object.prototype.toString.call(new customArray())); //"[object customArray]"

// Unscopable
const unscop = Object.create({ hidden: 'prototype hidden' });
Object.assign(unscop, {
    hidden: 'hide me',
    visible: 'show me',
    [Symbol.unscopables]: {
        hidden: true,
    },
});

with (unscop) {
    console.log(visible);
    console.log(hidden);
}
