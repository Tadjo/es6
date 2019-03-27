const newLine = String.raw`This string has new line \n`;
console.log(newLine === "This string has new line \n") // false
console.log(newLine === "This string has new line \\n") // true

const withUnicode = String.raw`\u{61}`// \u{61} - юникод обозначения для латинской "a"
console.log(withUnicode === 'a'); // false
console.log(withUnicode  === '\\u{61}'); // true