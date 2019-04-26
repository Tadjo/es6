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
    get(target, key, receiver) {
        if (key.startsWith('_')) {
            console.error(`You try access private data by key: ${key}`);
            return undefined;
        }
        return Reflect.get(target, key, receiver);
    },
    set(target, key, value, receiver) {
        if (key.startsWith('_')) {
            console.error('You cannot set property with \'_\' prefix ');
            return true;
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
try {
    prx._privateMethod();
} catch (error) {
    console.error(error);
}
prx._hey = 'unchangable';