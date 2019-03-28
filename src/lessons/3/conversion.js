// Поддерживает явное и неявное преобразование к boolean
const sym = Symbol('conversion');
console.log(Boolean(sym)); //true
console.log(!sym); // false

// Приведение к number явно/неявно приведет к TypeError
+sym; // TypeError: Cannot convert a Symbol value to a number
Number(sym); // TypeError: Cannot convert a symbol value to a number

// Приведение к сроке разрешено только в явном виде
`${sym}`; // TypeError: cannot convert a Symbol to a string
String(sym); // Symbol(conversion)
Object.prototype.toString.call(sym); // '[object Symbol]'