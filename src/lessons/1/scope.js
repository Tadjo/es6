'use strict';

function withBlockScope() {
    let tst = 1;
    if (true) {
        let tst = 2;
        console.log('Inside:', tst); // Inside: 2
    }
    console.log('Out:', tst); // Out: 1
}
withBlockScope();

{
    let tst = 1;
    if (true) {
        let tst = 2;
        console.log('Inside:', tst);
    }
    console.log('Out:', tst);
}
console.log(tst); // Cant access tst variable in outer scope
