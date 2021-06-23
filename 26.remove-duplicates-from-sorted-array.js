/*
 * @lc app=leetcode id=26 lang=javascript
 *
 * [26] Remove Duplicates from Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (nums.length === 0) {
        return 0;
    }
    if (nums.length === 1) {
        return 1;
    }
    let uniques = [nums.length];
    uniques[0] = 0;
    let length = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[uniques[length-1]]) {
            uniques[length] = i;
            length++;
            // if (i === nums.length-2) {
            //     uniques[length] = i+1;
            //     length++;
            // }            
        }
    }
    for (let j = 0; j < length; j++) {
        nums[j] = nums[uniques[j]];
    }
    return length;
    
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = removeDuplicates;
// @after-stub-for-debug-end