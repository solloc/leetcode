/*
 * @lc app=leetcode id=414 lang=javascript
 *
 * [414] Third Maximum Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    nums.sort((a,b)=>b-a);
    let mySet = new Set([...nums]);
    let thirdMax = [...mySet][0];
    if (mySet.size > 2) {
        thirdMax = [...mySet][2];
    }
    return thirdMax;
};
// @lc code=end

