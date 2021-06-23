/*
 * @lc app=leetcode id=1051 lang=javascript
 *
 * [1051] Height Checker
 */

// @lc code=start
/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    let original = [...heights];
    heights.sort((a,b)=>a-b);
    let differences = 0;
    for (let i = 0; i < heights.length; i++) {
        if (heights[i] !== original[i]) {
            differences++;
        }        
    }    
    return differences;
};
// @lc code=end

