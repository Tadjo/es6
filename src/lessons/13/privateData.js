// сделать приватными свойства начинающиеся с '_' и симполы;
const source = {
    x: 1,
    y: 2,
    greet: 'hello',
    _hey: 'hidden',
    _privateMethod() { return 'private!!'},
    [Symbol()]: true,
}

const prx = new Proxy(source, {
    ownKeys(target) {
        return Object.keys(target).filter(key => !key.startsWith('_'));
    },
    get(target, key) {
        if (key.startsWith('_')) {
            console.error('You try access private data');
            return null;
        }
        return target[key];
    },
    set(target, key, value, receiver) {
        if (key.startsWith('_')) {
            console.error('You cannot use property with \'_\' prefix ');
            return;
        }
        Reflect.set(target, key, value, receiver);
    }
});


console.log(Object.keys(prx));
console.log(Object.getOwnPropertySymbols(prx));
console.log(Object.getOwnPropertyNames(prx));
console.log(Reflect.ownKeys(prx));

console.log(prx.x);
console.log(prx._hey);
console.log(prx._privateMethod());
prx._hey = 'unchangable';