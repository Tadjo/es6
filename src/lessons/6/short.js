const x = 1;
const y = 1;
function foo() {/* body */}
{
    const point = {x, y, foo};
}
{
    // Тоже самое что и
    const point = {x: x, y: y, foo: foo}
}