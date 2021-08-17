/*
 * @lc app=leetcode id=203 lang=javascript
 *
 * [203] Remove Linked List Elements
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
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    if (!head) {
        return head;
    }

    let current = head;
    while (current && current.next) {
        if (current.next.val === val) {
            current.next = current.next.next;
            continue;
        }
        current = current.next;
    }
    if (head && head.val === val) {
        head = head.next;
    }

    if (head && head.val === val) {
        head = null;
    }

    return head;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = removeElements;
// @after-stub-for-debug-end