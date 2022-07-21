/*
 * @lc app=leetcode id=724 lang=typescript
 *
 * [724] Find Pivot Index
 */

// @lc code=start
function pivotIndex(nums: number[]): number {
    let sumsFromTheLeft: number[] = Array(nums.length);
    let sumsFromTheRight: number[] = Array(nums.length);
    
    let prev = 0;
    for (let i = 0; i < nums.length; i++) {
        prev = prev + nums[i];
        sumsFromTheLeft[i] = prev;        
    }

    prev = 0;
    for (let i = nums.length-1; i > -1; i--) {
        prev = prev + nums[i];
        sumsFromTheRight[i] = prev;        
    }

    if (sumsFromTheRight.length > 1) {
        if (sumsFromTheRight[1] === 0) {
            return 0;
        }        
    }

    for (let i = 0; i < (sumsFromTheLeft.length - 2); i++) {
        if (sumsFromTheLeft[i] === sumsFromTheRight[i+2]) {
            return (i+1);
        }
    }

    if (sumsFromTheLeft.length > 1) {
        if (sumsFromTheLeft[sumsFromTheLeft.length - 2] === 0) {
            return (sumsFromTheLeft.length - 1);
        }
    }    

    if (nums.length === 1 && nums[0] === 0) {
        return 0;
    }

    return -1;
};
// @lc code=end

