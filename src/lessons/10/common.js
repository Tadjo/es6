// library.js
const lodash = require('../../assets/libs/lodash');
const moment = require('../../assets/libs/moment');

console.log(moment(new Date()).format('LLL'));
console.log(lodash.fill([0, 0, 0], 'filler'));

// public methods
function sortByDate(date, order) {};
function groupByDate(date) {};

module.exports = {
    sortByDate,
    groupByDate,
};
