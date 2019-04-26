(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['lodash', 'moment', factory]);
    } else if (typeof module === 'object' && module.exports) {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like environments that support module.exports,
        // like Node.
        module.exports = factory(require('lodash'), require('moment'));
    } else {
        // Global variables
        root.myLibrary = factory(root.lodash, root.moment);
    }
})(typeof self !== 'undefined' ? self : this, function(_, moment) {
    function sortByDate(date, order) {};
    function groupByDate(date) {};
    return {
        sortByDate,
        groupByDate,
    }
});