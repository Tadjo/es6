const x = 1;
const y = 1;
const point = {x, y}; // Тоже замое что и  {x: x, y: y}

const obj1 = {
    func() {
        console.log('From method shorthand');
    },
    *generator () {
        yield 1;
    }
}
// Эквивалентно следующему
const obj2 = {
    func: function() {
        console.log('From method shorthand');
    },
    generator: function* () {
        yield 1;
    }
}



// es5
const object1 = {}
object['x' + '_0'] = 2;
object['dinamic' + '_func'] = function() {/*  */}
// es6
const object = {
    ['x' + '_0']:2,
    ['dinamic' + '_func']() {/*  */}
}

// proto



// Symbol.hasInstance

const ParentForAll = {
    [Symbol.hasInstance](value) {
        return true
    }
};
console.log({} instanceof ParentForAll); // true
console.log(2 instanceof ParentForAll); // true

// Symbol.toPromitive
const course = {
    lessons: ['tick', 'tack'],
    [Symbol.toPrimitive](hint) { // hint is (number | string | default)
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
    }
}

console.log(course + 1); // 2 + 1 = 3
console.log(course * 3); // 2 * 3 = 6
console.log(course == 2); // true
console.log(String(course)); // tick tack


// Symbol.toStringtag

