const log = console.log;
const banana = 	"\ud83c\udf4c";
/* flags */
// /s/gyi.flags
/* sticky */
// /a/g.match('abaa');
// /a/gy.match('abaa');
/* TODO: more advanced and usefull case */
/* unicode flag */
console.group('match code point');
log(`/\\u{61}/.test('a'):`, /\u{61}/.test('a'));
log(`/\\u{61}/u.test('a'):`, /\u{61}/u.test('a'));
log(`/\\ud83c/.test(banana):`, /\ud83c/.test(banana));
log(`/\\ud83c/u.test(banana):`, /\ud83c/u.test(banana));
console.groupEnd();
console.group('match for dot operator');
log(/^.$/.test(banana));
log(/^.$/u.test(banana));
log(/\ud83c\udf4c{2}/.test(banana.repeat(2)))
log(/\ud83c\udf4c{2}/u.test(banana.repeat(2)))
console.groupEnd();
console.group('match for unicode points');
log(/\u{1F34C}/u.test(banana));
log(/^[ab\ud83c\udf4c]$/.test('a'));
log(/^[ab\u0061]$/.test('a')); // same as previous
log(/^[ab\ud83c\udf4c]$/.test(banana));
log(/^[ab\ud83c\udf4c]$/u.test(banana));
console.groupEnd();
console.group('match one char');
log(/^\S$/.test(banana)) // false
log(/^\S$/u.test(banana)) // true
console.groupEnd();
