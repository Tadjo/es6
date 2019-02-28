/* Lesson 2, code snippents */

/* New functions */
const sentence = 'Bad Deadpool... Good Deadpool!';
const banana = 	"\ud83c\udf4c";
/* strartWith */
sentence.startsWith('bad');
sentence.startsWith('bad', 1);
/* endsWith */
sentence.endsWith('pool');
sentence.endsWith('pool', 20);
/* includes */
sentence.includes('Deadpool');
sentence.includes('deadpool');
sentence.includes('Bad', 1);
/* repeat */
"hey".repeat(10);
// Range Error
"hey".repeat(-1);
"hey".repeat(1/0) // бесонечность
/* codePointAt/fromCodePoint */
const bananaCode = banana.codePointAt(0);
String.fromCodePoint(bananaCode);
/* normolize */
/* TODO */


/* Шаблонные строки */
`My host is ${window.location.hostname} and port is ${window.location.port}`;
// escape new line
`1\
2\
3`
// escape
`i want escape you \${}`
// line terminators always LF: \n
`with new line
`.search('\n')

/* Теговые шаблоны */
/* TODO */

/* Regexp */
/* flags */
/s/gyi.flags
/* sticky */
/a/g.match('abaa');
/a/gy.match('abaa');
/* TODO: more advanced and usefull case */
/* unicode flag */



