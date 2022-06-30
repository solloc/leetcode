/*
 * @lc app=leetcode id=1 lang=typescript
 *
 * [1] Two Sum
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
    let ret: number[] = [];
    for (let i = 0; i < nums.length; i++) {
        const num1 = nums[i];
        for (let j = 0; j < nums.length; j++) {
            if (j !== i) {
                const num2 = nums[j];
                if (num1 + num2 === target) {
                    return [i,j];
                }                
            }
        }        
    }
    return ret;
};
// @lc code=end

