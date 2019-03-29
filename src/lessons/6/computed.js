{
    // es5
    const object = {};
    object['x' + '_0'] = 2;
    object['dinamic' + '_func'] = function() {
        /*  */
    };
    console.log(object);
}
// es6
{
    const object = {
        ['x' + '_0']: 2,
        ['dinamic' + '_func']() {
            /*  */
        },
    };
    console.log(object);
}
