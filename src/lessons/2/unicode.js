const log = console.log;
const surrogate = '\ud83c\udf4c'; // 🍌
const codePoint = '\u{1f34c}'; // 🍌

console.group('codePointAt');
const point = surrogate.codePointAt(0);
const charCode = surrogate.charCodeAt(0);
console.log('codePointAt: ', point);
console.log('charCode: ', charCode);
console.log('fromCodePoint: ', String.fromCodePoint(point)); // 🍌
console.log('fromCodePoint index = 1: ', String.fromCodePoint(surrogate.codePointAt(1))); //"�"
console.groupEnd();

console.group('match code point');
log(String.raw`/\u{61}/.test('a'): `, /\u{61}/.test('a'));
log(String.raw`/\u{61}/u.test('a'): `, /\u{61}/u.test('a'));
log(String.raw`/\ud83c/.test(surrogate): `, /\ud83c/.test(surrogate));
log(String.raw`/\ud83c/u.test(surrogate): `, /\ud83c/u.test(surrogate));
console.groupEnd();

console.group('match one symbol');
log(String.raw`/^.$/.test(surrogate): `, /^.$/.test(surrogate));
log(String.raw`/^.$/u.test(surrogate): `, /^.$/u.test(surrogate));
log(String.raw`/^\S$/.test(surrogate): `, /^\S$/.test(surrogate));
log(String.raw`/^\S$/u.test(surrogate): `, /^\S$/u.test(surrogate));
log(String.raw`/\ud83c\udf4c{2}/.test(surrogate.repeat(2)): `, /\ud83c\udf4c{2}/.test(surrogate.repeat(2)));
log(String.raw`/\ud83c\udf4c{2}/u.test(surrogate.repeat(2)): `, /\ud83c\udf4c{2}/u.test(surrogate.repeat(2)));
console.groupEnd();

console.group('unicode sequence length');
log('Surrogate length: ', surrogate.length);
log('Unicode point length: ', codePoint.length);
log('Spread surrogate: ', [...surrogate].length);
log('Iterate');``
for (const code of surrogate) {
    console.log(code);
}
console.groupEnd();