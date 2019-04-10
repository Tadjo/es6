const dictionary = {
    'hello': 'Привет',
    'accept': 'Принять',
    'reject': 'Отклонить'
}

function transl(strings, ...values) {
    return strings.reduce((acc, curr, index) => `${acc}${curr}${values[index] ? (dictionary[values[index]] || values[index]) : ''}`, '');
}

console.log(transl`${'hello'}`);
console.log(transl`${'accept'}`);