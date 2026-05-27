// Last updated: 5/27/2026, 8:30:58 PM
/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr,fn){
    const res = [];
    for (const i in arr){
        res.push(fn(arr[i],Number(i)));
    }
    return res;
}