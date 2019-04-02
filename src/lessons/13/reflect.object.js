const target = { key: 'x' };
console.group('getOwnPropertyDescriptor');
console.group('exist');
console.log(Reflect.getOwnPropertyDescriptor(target, 'key'));
console.log(Object.getOwnPropertyDescriptor(target, 'key'));
console.groupEnd();

console.group('notExist');
console.log(Reflect.getOwnPropertyDescriptor(target, 'x'));
console.log(Object.getOwnPropertyDescriptor(target, 'x'));
console.groupEnd();

console.group('notObject');
try {
    Reflect.getOwnPropertyDescriptor(null, 'x');
} catch (error) {
    console.log(error);
}
try {
    Object.getOwnPropertyDescriptor(null, 'x');
} catch (error) {
    console.log(error);
}
console.groupEnd();
console.groupEnd();




console.group('defineProperty');
console.group('new prop');
console.log(Reflect.defineProperty(target, 'y', {value: 1}));
console.log(Object.defineProperty(target, 'y', {value: 1}));
console.groupEnd();

console.group('notObject');
try {
    Reflect.defineProperty(null, 'x', {});
} catch (error) {
    console.log(error);
}
try {
    Object.defineProperty(null, 'x', {});
} catch (error) {
    console.log(error);
}
console.groupEnd();
console.groupEnd();



console.group('getPrototypeOf');
console.group('with proto');
console.log(Reflect.getPrototypeOf(target));
console.log(Object.getPrototypeOf(target));
console.groupEnd();

console.group('without proto');
try {
    console.log(Reflect.getPrototypeOf(Object.create(null)));
} catch (error) {
    console.log(error);
}
try {
    console.log(Object.getPrototypeOf(Object.create(null)));
} catch (error) {
    console.log(error);
}
console.groupEnd();

console.group('notObject');
try {
    Reflect.getPrototypeOf(null);
} catch (error) {
    console.log(error);
}
try {
    Object.getPrototypeOf(null);
} catch (error) {
    console.log(error);
}
console.groupEnd();
console.groupEnd();




