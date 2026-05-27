// Last updated: 5/27/2026, 11:28:31 PM
/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
var sortBy = function(arr, fn) {
    return arr.sort((a,b)=>fn(a)-fn(b))
};