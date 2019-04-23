let x, y;
[x = 1, y] = [1]; // x: 1, y: undefined
({ x, y = 2 } = { x: 1 }); // x: 1, y: 2

({ point: { x, y = 2 } = { x: 1 } } = {}); // x: 1, y: 2

try {
    ({
        point: { x, y = 2 },
    } = {}); // TypeError: Cannot destructure property {x} of 'undefined' or 'null'
} catch (error) {
    console.log(error); /* Значения по умолчанию могут вычисляться на лету */
}

/* Значения по умолчанию могут вычисляться на лету */
const gety = () => 2;
({ x = 1, y = gety() * 2 } = {}); // x: 2, y: 4
/* Вы можете ссылаться на предыдущие переменные  */
({ x = 2, y = x * x } = {}); // x: 2, y: 4

try {
    ({ x = y * 2, y = 2 } = {});
} catch (error) {
    console.log(err)
}