{
    // es5
    const max = Math.max.apply(null, [10, 20, 8, 22]); // 22
    console.log(max);
}
{
    // es6
    console.log(Math.max(...[10, 20, 8, 22]));
    // Делаем плоскую структуру из массива/объектов
    const flatted = [...[1, 2], 3, 4, ...[5, 6]]; // [1, 2, 3, 4, 5, 6]
    const flattenObject = { ...{ x: 1 }, ...{ y: 2 }, z: 3 }; // {x: 1, y: 2, z: 3}
    console.log(flatted, flattenObject);
    // Коируем массив или объект(аналогично с объектами)
    const source = [1, 2];
    const copy = [...source]; // [1, 2]. source !== copy
    console.log(source === copy);
}
