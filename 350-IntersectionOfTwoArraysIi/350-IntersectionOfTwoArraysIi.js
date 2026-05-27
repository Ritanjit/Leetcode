// Last updated: 5/27/2026, 8:31:19 PM
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let res = [];
    for (let i=0; i<nums1.length; i++) {
        let index = nums2.indexOf(nums1[i]);
        if (index>=0) {
            res.push(nums1[i]);
            nums2.splice(index,1);
        }
    }
    return res;
};