// Last updated: 5/27/2026, 8:30:22 PM
/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
var sortBy = function(arr, fn) {
    return arr.sort((a,b)=>fn(a)-fn(b))
};