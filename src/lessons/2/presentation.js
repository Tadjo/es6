/* New functions */
const sentence = 'Bad Deadpool... Good Deadpool!';
const banana = 	"\ud83c\udf4c";
const log = console.log;
/* strartWith */
log(sentence.startsWith('Bad'));
log(sentence.startsWith('bad'));
log(sentence.startsWith('bad', 1));
/* endsWith */
log(sentence.endsWith('pool!'));
log(sentence.endsWith('pool', 12));
/* includes */
log(sentence.includes('Deadpool'));
log(sentence.includes('deadpool'));
log(sentence.includes('Bad', 1));
/* repeat */
// log("hey ".repeat(10));
// Range Error
"hey".repeat(-1);
"hey".repeat(1/0) // бесонечность
// !!!! Before this, we need do some introduction to unicode
/* codePointAt/fromCodePoint */
const bananaCode = banana.codePointAt(0);
log(bananaCode);
log(String.fromCodePoint(bananaCode));
/* normolize */
/* TODO */


/* Шаблонные строки */
console.log(`My host is ${window.location.hostname} and port is ${window.location.port}`);
// multiline
console.log(`You have
no
permission for
this action`);
// escape
console.log(`i want escape you \${}`);
// line terminators always LF: \n
log(`with new line
`.search('\n')); // true


/* Raw strings */
const newLine = String.raw`This string has new line \n`;
console.log(newLine === "This string has new line \n"); // false
console.log(newLine === "This string has new line \\n"); // true

const withUnicode = String.raw`\u{61}`;// \u{61} - юникод обозначения для латинской "a"
console.log(withUnicode === 'a'); // false
console.log(withUnicode  === '\\u{61}'); // true


/* Tagged template presentation example */
function tag(strings, take, skip) {
    console.log(strings); // ['http://domain.com/users?take=', "&skip"],
    console.log(take); // take = 20
    console.log(skip); // skip = 20
}
const take = 20;
const skip = 0;
tag`http://domain.com/users?take=${take}&skip=${skip}`;
/* Теговые шаблоны (простейший пример форматирования строки)*/

/* Regexp */
const flags = /.*/gy.flags; // gy
const globalWithoutSticky = 'abaa'.match(/a/g); // ['a', 'a', 'a', 'a', ]
const globalWithSticky = 'abaa'.match(/a/g); // ['a']
const withoutUnicodeFlag = /\ud83c/.test('\ud83c\udf4c'); // true
const withUnicodeFlag = /\ud83c/u.test('\ud83c\udf4c'); // false

/* flags */
// /s/gyi.flags
/* sticky */
// /a/g.match('abaa');
// /a/gy.match('abaa');
/* TODO: more advanced and usefull case */
/* unicode flag */
// match code point
log(/\u{61}/.test('a'));
log(/\u{61}/u.test('a'));
log(/\ud83c/.test(banana));
log(/\ud83c/u.test(banana));
// match for dot operator
log(/^.$/.test(banana));
log(/^.$/u.test(banana));
log(/\ud83c\udf4c{2}/.test(banana.repeat(2)));
log(/\ud83c\udf4c{2}/u.test(banana.repeat(2)));
// match for unicode points
log(/\u{1F34C}/u.test(banana));

log(/^[ab\ud83c\udf4c]$/.test('a'));
log(/^[ab\u0061]$/.test('a')); // same as previous
log(/^[ab\ud83c\udf4c]$/.test(banana));
log(/^[ab\ud83c\udf4c]$/u.test(banana));

log(/^\S$/.test(banana)); // false
log(/^\S$/u.test(banana)); // true

