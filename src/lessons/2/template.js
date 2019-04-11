console.log(`My host is ${window.location.hostname} and port is ${window.location.port}`);

// escape new line
console.log(`You have
no
permission for
this action`);

console.log(['You have', 'no', 'permission for', 'this action']).join('\n'); // es5

/* Проблема */
const indent = (() => `You have
                    no
                    permission for
                    this action`
)();
console.log(indent);
// quick solution
console.log(indent.replace(/\n\s{2,}/, ''));

// escape
console.log(`basic escape \\, \\u0061`);
console.log(`i want escape you \${}`);

// line terminators always LF: \n
console.log(
    `first
second` === 'first\nsecond'
); // true
