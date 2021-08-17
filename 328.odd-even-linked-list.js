/*
 * @lc app=leetcode id=328 lang=javascript
 *
 * [328] Odd Even Linked List
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
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function(head) {

    if (!head) {
        return head;
    }

    let current = head;
    let oddList = null;
    let oddListLast = null;
    let evenList = null;
    let evenListLast = null;
    let index = 0;
    while (current) {
        if (index % 2 === 0) {
            if (evenListLast) {
                evenListLast.next = current;
                evenListLast = current;
            } else {
                evenList = current;
                evenListLast = current;
            }
        } else {
            if (oddListLast) {
                oddListLast.next = current;
                oddListLast = current;
            } else {
                oddList = current;
                oddListLast = current;
            }
        }
        index++;
        current = current.next;
    }
    evenListLast.next = oddList;
    if (oddListLast) {
        oddListLast.next = null;
    }    
    return evenList;    
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = oddEvenList;
// @after-stub-for-debug-end