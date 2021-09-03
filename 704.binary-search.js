/*
 * @lc app=leetcode id=704 lang=javascript
 *
 * [704] Binary Search
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let halfIndex = Math.floor(nums.length/2);
    let currentValue = nums[halfIndex];
    if (currentValue === target) {
        return halfIndex;
    } else {
        if (nums.length <= 1) {
            return -1;
        }
        if (target < currentValue) {
            return search(nums.slice(0, halfIndex), target);
        } else {
            let tempIndex = search(nums.slice(halfIndex), target);
            if (tempIndex === -1) {
                return -1;
            } else {
                return halfIndex + tempIndex;
            }
            
        }
    }
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = search;
// @after-stub-for-debug-end