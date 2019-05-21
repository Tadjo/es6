// library.js
define('amd_module',['lodash', 'moment'], function(_, moment) {
    console.log(moment(new Date()).format('LLL'));
    console.log(_.fill([0, 0, 0], 'filler'));
    function sortByDate(date, order) {
    };
    function groupByDate(date) {};
    return {
        sortByDate,
        groupByDate,
    }
});
