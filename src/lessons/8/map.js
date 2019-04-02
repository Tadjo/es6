const map = new Map();
const symbol = Symbol();
map.set(1, '1');
// ключи могут быть любые значения
map.set({}, 'object');
map.set(symbol, 'symbol');

// Map.keys, values, entries возвращают итераторы
console.log(...map.keys()); // [1, {}, Symbol(uniq)]
console.log(...map.values()); // [1, object, symbol]
console.log(...map.entries()); // [[1, "1"], [{…}, "object"], [Symbol(uniq), "symbol"]]

map.has(symbol); // true
map.has({}); //false
map.size // 3
map.delete(1);
map.size // 2
map.clear();
map.size // 0