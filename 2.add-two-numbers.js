/*
 * @lc app=leetcode id=2 lang=javascript
 *
 * [2] Add Two Numbers
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @typedef ListNode
 * @property {number} val
 * @property {ListNode} next
 */

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let result = null;
    let resultTail = null;
    let currentL1 = l1;
    let currentL2 = l2;
    let carryOver = 0;
    while (currentL1 || currentL2) {
        let val1 = 0;
        let val2 = 0;

        if (currentL1) {
            val1 = currentL1.val;
            currentL1 = currentL1.next;
            
        }

        if (currentL2) {
            val2 = currentL2.val;
            currentL2 = currentL2.next;
        }    

        /** @type {ListNode} */
        let newDigit = new ListNode();

        let sum = val1 + val2 + carryOver;
        newDigit.val = (sum) % 10;
        carryOver = Math.floor(sum/10);

        if (resultTail) {
            resultTail.next = newDigit;
            resultTail = newDigit;
        } else {
            result = newDigit;
            resultTail = newDigit;
        }
    }    

    if (carryOver > 0) {
        resultTail.next = new ListNode();
        resultTail.next.val = carryOver;
    }

    return result;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = addTwoNumbers;
// @after-stub-for-debug-end