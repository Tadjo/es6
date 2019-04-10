let title;
({ title: title } = { id: 1, title: 'ES6' }); // title = ES6

// короткая запись(тоже самое что и предыдущее)
({ title } = { id: 1, title: 'ES6' }); // title = ES6

// вложенность
try {
    ({ lesson: { title } } = { id: 1, title: 'ES6', lesson: { id: 6, title: 'Destructing' } }); // title = 'Destructing'
    ({ title } = null); // TypeError
} catch (error) {
    console.error(error);
}