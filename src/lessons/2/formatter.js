const formatters = {
    date: {
      token: ':в',
      handler: formatDate
    }
  }
function format(strings, ...values) {
return strings.reduce((prev, cur, i) => {
    const next = strings[i+1];
    let value = values[i];
    Object.keys(formatters).forEach(function(key) {
    if (next && new RegExp(`^${formatters[key].token}`).test(next)) {
        value = formatters[key].handler(value);
        strings[i+1] = next.replace(formatters[key].token, '');
    }
    });
    return `${prev}${cur}${value || ''}`
}, '');
}

function formatDate(value) {
const date = new Date(value);
return `${('0' + (date.getMonth() + 1)).substring(-2)}\
.${('0' + date.getDate()).substring(-2)}\
.${date.getFullYear()}`
}

log(format`current Date is ${'2019-03-03T14:01:33.505Z'}:d`)