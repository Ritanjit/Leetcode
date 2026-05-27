// Last updated: 5/27/2026, 11:28:34 PM
/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
    if(Array.isArray(obj)){
        return obj.length===0
    }
    else{
        let arr = Object.keys(obj);
        return arr.length===0
    }
};