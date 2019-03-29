{
    try {
        const fn = () => console.log(arguments);
        fn(); // ReferenceError: arguments is not defined
    } catch (error) {
        console.log(error);
    }
}

{
    const fn = function() {
        return () => console.log(arguments);
    };
    fn(1, 2, 3)(); // [1, 2, 3], Аргументы были захвачены из родительской функции
}
