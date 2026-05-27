// Last updated: 5/27/2026, 8:31:09 PM
/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    
    return function(x) {
        for(const fn of functions.reverse()){
            x = fn(x);
        }
        return x;
    }
};
