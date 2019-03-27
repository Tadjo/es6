/* hoisting + TDZ */
try {
    console.log('Var:', hoistVar);
    console.log('Let:', hoist);
    var hoistVar = 'Im var';
    let hoist = 'Im let';
} catch (error) {
    console.log(error);
}

// TDZ is time zone, not code zone
if (1) {
    function tryGetLet() {
        console.log(tdz);
    }
    // tryGetLet() // Error TDZ
    let tdz = 'tdz in delay call';
    tryGetLet();
}