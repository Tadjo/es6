console.log(`My host is ${window.location.hostname} and port is ${window.location.port}`);

// escape new line
console.log(`1\
2\
3`)

// escape
console.log(`i want escape you \${}`)

// line terminators always LF: \n
console.log(`with new line
`.search('\n')) // true
