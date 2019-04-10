const source = [...'Hello'];
const name = [...'Morti'];

console.log(source.concat(name));

name[Symbol.isConcatSpreadable] = false;

console.log(source.concat(name));
