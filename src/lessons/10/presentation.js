// lib.js
export function parseQueryParams(url) {
    const params = new Map();
    const reg = /(\?|\&)([^=]+)\=([^&]+)/g;
    let tokens;
    while(tokens = reg.exec(url)) {
        console.log(tokens);
        [, , key, value] = tokens;
        params.set(key, value);
    }
    return params;
}


// module1
export const BASE_API = 'https://api';
export class Resolver {}

// module 2
import { BASE_API, Resolver } from 'module1';
// или
import * as module1 from 'module1';
console.log(module1.BASE_API); // https://api



// module1
export default function() { return 'Hello'}
// или
function hello() { return 'Hello'};
export { hello as default };

// module 2
import Hello from 'module1';
Hello();



// moduleA
import { x } from 'moduleB';
export const y = 2;
console.log({x, y}); // {1, 2}

// moduleB
import { y } from 'moduleA';
export const x = 1;
console.log({x, y}); // {1, 2}


// moduleA
fun(); // выполнится без ошибок потому что импорт функции уже был выполнен
import { fun } from 'moduleB';

// однако
if (someCondition) {
    import { fun } from 'moduleB'; // TypeError: нельзя импортировать модули динамически
}
{
    import { fun } from 'moduleB'; // TypeError: такдже приведет к ошибке
}
// moduleB
export function fun () { console.log('moduleB')}


// Именованние импорты
import { name } from 'module';

// Псевдонимы для импортов
import { name as uniqName} from 'module';

// Импортирование всех экспортируемых значений
import * as lib from 'module';

// Импортирование по умоляанию
import name from 'module';
// или
import {default as name} from 'module';

// Импорт всего модуля, вы не импортируете никах значений а просто выполните тело модуля
import 'module';

lib
uniqName
name

// Именованный экспорт для var, let, const, function, class
export const value = true;
export function func () {/* body */};

// Экспортирование выражений
export { firstExport, secondExport };

// Псевдонимы для экспортов
export { firstExport, secondExport as someName};
export { firstExport, secondExport as default};

// Экспорт по умолчанию
export default class Lib {}

// Реэкспорт
export * from 'module';

// Реэкспорт конкретных значений
export { firstExport, secondExport} from 'module';
export { firstExport, secondExport as someName} from 'module';
// Реэкспорт значений по умолчанию
export { default } from 'module';
export { default as someName } from 'module';
export { firstExport, secondExport as default} from 'module';



// moduleA
import _, { Helper, HEIGHT } from 'moduleB'; // _ - экспорт по умолчанию
//или
import { Helper, HEIGHT, default as _ } from 'moduleB'; // _ - экспорт по умолчанию


// moduleB
export default function () {/* body */};
export class Helper {};
export const HEIGHT = 200;