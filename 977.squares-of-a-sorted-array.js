/*
 * @lc app=leetcode id=977 lang=javascript
 *
 * [977] Squares of a Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let numsSquared = nums.map((val, index) => val*val);
    numsSquared.sort((a,b) => a - b);
    return numsSquared;
};
// @lc code=end

