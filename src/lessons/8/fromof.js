Array.from('Hello'); // ["H", "e", "l", "l", "o"]
/* Array.from может принимать функцию для маппинга вторым аргуметтом,
в данном случае мы создадим массив с текстовыми значениями всех спанов на странице*/
Array.from(document.getElementsByTagName('span'), span => span.textContent);

Array.of(1, 2, 'a', {x: 1}); // [1, 2, "a", {x: 1}]

/* Array.from/Array.of позволяют создавать экземпляры конкретного наследованного класса. */
class CustomArray extends Array {}
console.log(CustomArray.from('I am CustomArray instance') instanceof CustomArray); // true
console.log(CustomArray.of(1, 2, 3) instanceof CustomArray); // true