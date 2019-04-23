{
    // proto
    const ancestor = { getMe: 'yep!!' };
    const descendant = {};
    // const descendant = Object.create(ancestor);
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
{
    // defineProperty перезатирает поведение свойства __proto__
    const ancestor = { getMe: 'yep!!' };
    const descendant = {};
    Object.defineProperty(descendant, '__proto__', {value: ancestor}); // define Property перезатирает существующий getter/setter для proto
    console.log(descendant.getMe); // undefined!!
}
{
    // при создании объекта без прототипа у него нет свойства __proto__
    const withoutProto = Object.create(null);
    console.log('__proto__' in withoutProto); // false
    withoutProto.__proto__ =  'just value';
    console.log(withoutProto.__proto__); // just value
}