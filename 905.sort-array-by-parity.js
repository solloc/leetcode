/*
 * @lc app=leetcode id=905 lang=javascript
 *
 * [905] Sort Array By Parity
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    let length = nums.length;
    // let oddPointer = nums.length-1;
    for (let evenPointer = 0; evenPointer < length; evenPointer++) {
        if (nums[evenPointer]%2 !== 0) {
            for(let oddPointer = evenPointer; oddPointer < length; oddPointer++) {
                if (nums[oddPointer]%2 === 0) {
                    let currentOdd = nums[evenPointer];
                    nums[evenPointer] = nums[oddPointer];
                    nums[oddPointer] = currentOdd;
                    break;                    
                }
            }
        }
    }
    return nums;
};
// @lc code=end

