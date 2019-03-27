{
    console.group('es5');
    let callbacks = [];
    for (var i = 1; i <= 5; i++) {
        // Solution 1
        (function() {
            var k = i;
            callbacks.push(function() {
                console.log(k ** 2);
            });
        })();
        // Solution 2
        // callbacks.push(
        //     function(i) {
        //         console.log(i ** 2);
        //     }.bind(null, i)
        // );
    }
    execute(callbacks);
    console.groupEnd();
}

{
    console.group('es6');
    let callbacks = [];
    for (let i = 1; i <= 5; i++) {
        callbacks.push(function() {
            console.log(i ** 2);
        });
    }
    execute(callbacks);
    console.groupEnd();
}

function execute(fns) {
    fns.forEach(function(fn) {
        fn();
    });
}
