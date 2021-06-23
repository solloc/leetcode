/*
 * @lc app=leetcode id=448 lang=javascript
 *
 * [448] Find All Numbers Disappeared in an Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let numSet = new Set(nums);
    let missingNums = [];
    for (let i = 1; i < nums.length+1; i++) {
        if (!numSet.has(i)) {
            missingNums.push(i);
        }
    }
    return missingNums;
};
// @lc code=end

