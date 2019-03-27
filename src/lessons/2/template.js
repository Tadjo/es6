console.log(`My host is ${window.location.hostname} and port is ${window.location.port}`);
// escape new line
console.log(`1\
2\
3`)
// escape
console.log(`i want escape you \${}`)
// line terminators always LF: \n
log(`with new line
`.search('\n')) // true


function tag(strings, take, skip) {
    console.log(strings); // ['http://domain.com/users?take=', "&skip"],
    console.log(take); // take = 20
    console.log(skip); // skip = 20
}
const take = 20;
const skip = 0;
tag`http://domain.com/users?take=${take}&skip=${skip}`;