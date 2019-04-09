function highlight(strings, ...values) {
    console.log(strings);
    console.log(values);
    return strings.reduce((acc, cur, index) => {
        const value = values[index] ? `<span class="highlight">${values[index]}</span>` : '';
        return `${acc}${cur}${value}`;
    }, '');
}

const card = { user: 'Jhon', score: 50 };

const el = document.createElement('div');
el.innerHTML = highlight`Hello ${card.user}, your score is: ${card.score}`;
document.body.appendChild(el);
