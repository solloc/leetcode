/*
 * @lc app=leetcode id=142 lang=javascript
 *
 * [142] Linked List Cycle II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @typedef {object} ListNode
 * @property {number} val
 * @property {ListNode} next
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    if (!head) {
        return null;
    }
    let visited = new Set();
    let current = head;
    while (current.next) {
        if (visited.has(current)) {
            return current;
        }
        visited.add(current);
        current = current.next;
    }    
    return null;
};
// @lc code=end

