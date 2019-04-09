const scope = {
    x: 1,
    y: 2
}

with(scope) {
    console.log(`x: ${x}, y: ${y}`);
}

scope[Symbol.unscopables] = {
    x: false,
    y: true,
}

with(scope) {
    console.log(`x: ${x}, y: ${y}`);
}

