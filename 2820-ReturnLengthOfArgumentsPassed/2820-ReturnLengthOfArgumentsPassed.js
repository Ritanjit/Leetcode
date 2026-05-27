// Last updated: 5/27/2026, 11:28:43 PM
/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */
var argumentsLength = function(...args) {
    let count = 0;
    for(let i = 0; i<args.length;i++){
        count++;
    }
    return count;
};

/**
 * argumentsLength(1, 2, 3); // 3
 */