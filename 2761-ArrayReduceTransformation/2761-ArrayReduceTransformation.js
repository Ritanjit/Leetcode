// Last updated: 5/27/2026, 11:28:59 PM
/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    if (!nums?.length) return init
    for (const item in nums) init = fn(init, nums[item])
    return init
};