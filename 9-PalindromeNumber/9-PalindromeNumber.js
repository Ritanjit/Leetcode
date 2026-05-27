// Last updated: 5/27/2026, 8:31:26 PM
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x<0 || (x>0 && x%10===0)) {     
        return false;       // x is either <zero or last digit is 0
    }
    let y=0;
    for (;y<x;x=~~(x/10)) {
        y = y*10 + (x%10);
    }
    return (x===y || x===~~(y/10));     // ~~ faster substitute for math.floor();
};

