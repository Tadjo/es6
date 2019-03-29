{
    const greet = (name = 'Jhon') => {
        return `Hello ${name}`;
    };

    console.log(greet()); // Hello Jhon
    console.log(greet(undefined)); // Hello Jhon
    console.log(greet('Shara')); // Hello Sara
}

{
    const foo = (x = 2, y = x * x) => {
        return x * y;
    };
    console.log(foo()); // 8
}

{
    const outer = 2;
    const foo = (x = 2, y = () => outer) => {
        return x * y();
    };
    console.log(foo()); // 4
}
