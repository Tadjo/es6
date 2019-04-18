// Поддерживает явное и неявное преобразование к boolean
const sym = Symbol('conversion');
console.log(Boolean(sym)); //true
console.log(!sym); // false

// Приведение к number явно/неявно приведет к TypeError
try {
    +sym; // TypeError: Cannot convert a Symbol value to a number
} catch (error) {
    console.log(error);
}
try {
    Number(sym); // TypeError: Cannot convert a symbol value to a number
} catch (error) {
    console.log(error);
}

// Приведение к сроке разрешено только в явном виде
try {
    `${sym}`; // TypeError: cannot convert a Symbol to a string
} catch (error) {
    console.log(error);
}
console.log(String(sym)); // Symbol(conversion)
console.log(sym.toString()); // Symbol(conversion)
Object.prototype.toString.call(sym); // '[object Symbol]'