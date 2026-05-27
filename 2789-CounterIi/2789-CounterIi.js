// Last updated: 5/27/2026, 11:28:56 PM
/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
// var createCounter = function(init){
//     let count = init;
//     function increment(){
//         return ++count;
//     }
//     function decrement(){
//         return --count;
//     }
//     function reset(){
//         count = init;
//         return count;
//     }
//     return {
//         increment,
//         decrement,
//         reset
//     }
// };

// var createCounter = function(init){
//     let count = init;
//     const increment = () => ++count;
//     const decrement = () => --count;
//     const reset = () => count = init;
//     return {
//         increment,
//         decrement,
//         reset
//     }
// };

var createCounter = function(init){
    let count = init;
    return{
        increment: () => ++count,
        decrement: () => --count,
        reset: () => count = init
    }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */