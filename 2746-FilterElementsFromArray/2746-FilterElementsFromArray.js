// Last updated: 5/27/2026, 8:31:01 PM
/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn){

    const res = [];

    // for(const i in arr){
    
    for(let i=0; i<arr.length; i++){

        if(fn(arr[i],Number(i))){
            res.push(arr[i]);
        }
    }
    return res;
}