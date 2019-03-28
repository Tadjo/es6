const log = console.log;
const banana = 	"\ud83c\udf4c";

console.group('match code point');
log(String.raw`/\u{61}/.test('a'): `, /\u{61}/.test('a'));
log(String.raw`/\u{61}/u.test('a'): `, /\u{61}/u.test('a'));
log(String.raw`/\ud83c/.test(banana): `, /\ud83c/.test(banana));
log(String.raw`/\ud83c/u.test(banana): `, /\ud83c/u.test(banana));
console.groupEnd();

console.group('match for dot operator');
log(String.raw`/^.$/.test(banana): `, /^.$/.test(banana));
log(String.raw`/^.$/u.test(banana): `, /^.$/u.test(banana));
log(String.raw`/\ud83c\udf4c{2}/.test(banana.repeat(2)): `, /\ud83c\udf4c{2}/.test(banana.repeat(2)));
log(String.raw`/\ud83c\udf4c{2}/u.test(banana.repeat(2)): `, /\ud83c\udf4c{2}/u.test(banana.repeat(2)));
console.groupEnd();

console.group('match for unicode points');
log(String.raw`/\u{1F34C}/u.test(banana): `, /\u{1F34C}/u.test(banana));
log(String.raw`/^[ab\ud83c\udf4c]$/.test('a'): `, /^[ab\ud83c\udf4c]$/.test('a'));
log(String.raw`/^[ab\u0061]$/.test('a'): `, /^[ab\u0061]$/.test('a')); // same as previous
log(String.raw`/^[ab\ud83c\udf4c]$/.test(banana): `, /^[ab\ud83c\udf4c]$/.test(banana));
log(String.raw`/^[ab\ud83c\udf4c]$/u.test(banana): `, /^[ab\ud83c\udf4c]$/u.test(banana));
console.groupEnd();

console.group('match one char');
log(String.raw`/^\S$/.test(banana): `, /^\S$/.test(banana)) // false
log(String.raw`/^\S$/u.test(banana): `, /^\S$/u.test(banana)) // true
console.groupEnd();
