/* Модуль имеет свою область видимости, поэтому внутри него ничто не создает глобальных переменных */
console.group('Let, Const');
let globvar = 1;
let globfn = function() {};
const globconst = '1';
console.log(window.globvar, window.globfn, window.globconst);
console.groupEnd();

/* function declaration не создают глобальных переменных  */
console.group('functions');
function glob() {};
console.log(glob);
console.log(window.glob);
console.groupEnd();

/* class declaration не создаen глобальных переменных  */
console.group('class');
class notGlobal {};
console.log(notGlobal);
console.log(window.notGlobal);
console.groupEnd();
