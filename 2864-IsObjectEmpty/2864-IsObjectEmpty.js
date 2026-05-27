// Last updated: 5/27/2026, 8:30:24 PM
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