// Last updated: 5/27/2026, 8:30:45 PM
/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    let res = [];
    for(let i=0;i<arr.length;i+=size){
        res.push(arr.slice(i,i+size))
    }
    return res
};