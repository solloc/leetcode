/*
 * @lc app=leetcode id=19 lang=javascript
 *
 * [19] Remove Nth Node From End of List
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
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let length = 0;
    let current = head;
    while (current) {
        length++;
        current = current.next;
    }   
    current = head; 

    let cutPosition = length-n-1;
    if (n === length) {
        return head.next;
    }

    for (let i = 0; i < cutPosition; i++) {
        current = current.next;
    }
    if (current.next) {
        current.next = current.next.next
    } else {
        current.next = null;
    }
    
    return head;
};
// @lc code=end

