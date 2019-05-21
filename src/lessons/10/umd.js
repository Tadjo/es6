(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        console.log('=== AMD ===');
        // AMD. Register as an anonymous module.
        define('umd_module', ['lodash', 'moment'], factory);
    } else if (typeof module === 'object' && module.exports) {
        console.log('=== COMMONJS ===');
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like environments that support module.exports,
        // like Node.
        module.exports = factory(require('../../assets/libs/lodash'), require('../../assets/libs/moment'));
    } else {
        // Global variables
        console.log('=== GLOBALS ===');
        root.myLibrary = factory(root._, root.moment);
    }
})(typeof self !== 'undefined' ? self : this, function(_, moment) {
    console.log(moment(new Date()).format('LLL'));
    console.log(_.fill([0, 0, 0], 'filler'));
    function sortByDate(date, order) {};
    function groupByDate(date) {};
    return {
        sortByDate,
        groupByDate,
    }
});