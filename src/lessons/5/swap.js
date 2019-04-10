let x = 1; y = 2;


// Без деструктуризации
let temp = x;
x = y;
y = temp;
console.log(x, y); // 2 1


// С деструктуризацией
[x, y] = [y, x];
console.log(x, y); // 1 2