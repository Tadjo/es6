// Именованние импорты (A)
// import { name } from './lib.js';
// console.log(name);

// Псевдонимы для импортов (B)
// import { name as uniqName} from './lib.js';
// console.log(uniqName);

// Импортирование всех экспортируемых значений (C)
// import * as lib from './lib.js';
// console.log(lib);

// Импортирование по умоляанию (D)
// import fn from './lib.js';
// console.log(fn());
// или (I)
// import {default as fn} from './lib.js';
// console.log(fn());

// Импорт всего модуля, вы не импортируете никах значений а просто выполните тело модуля (F)
// import './lib.js';