const banana = 	"\ud83c\udf4c";
const sentence = 'Bad Deadpool... Good Deadpool!';
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
log("hey ".repeat(10));
// Range Error
"hey".repeat(-1);
"hey".repeat(1/0) // бесонечность
// !!!! Before this, we need do some introduction to unicode
/* codePointAt/fromCodePoint */
const bananaCode = banana.codePointAt(0);
log(bananaCode);
log(String.fromCodePoint(bananaCode));
/* normolize */
const a = banana.normalize('NFC');
const b = banana.normalize('NFD');
const c = banana.normalize('NFKC');
const d = banana.normalize('NFKD');