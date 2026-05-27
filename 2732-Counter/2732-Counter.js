// Last updated: 5/27/2026, 11:29:15 PM
/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n){
    return function(){
        return n++;
    }
};

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */