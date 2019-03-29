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