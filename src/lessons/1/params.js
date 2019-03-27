{
    console.log('a'); // не будет вызвано
    function duble(a) {
        let a;
    }

    // Мы не можем перехватить это исключение потому что оно происходит до выполнения кода а не в рантайме
    try {
        duble(1);
    } catch (error) {
        console.log(error);
    }
}