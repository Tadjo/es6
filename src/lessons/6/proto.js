{
    // proto
    const ancestor = { getMe: 'yep!!' };
    const descendant = {};
    descendant.__proto__ = ancestor;
    console.log(descendant.getMe); // yep!!
}
{
    // Или в литералах
    const ancestor = { getMe: 'yep!!' };
    const descendant = { __proto__: ancestor };
    console.log(descendant.getMe); // yep!!
}
{
    // __proto__ не работает для динамических свойств
    const ancestor = { getMe: 'yep!!' };
    const descendant = { ['__proto__']: ancestor };
    console.log(descendant.getMe); // undefined!!
}
