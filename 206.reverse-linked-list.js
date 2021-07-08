/*
 * @lc app=leetcode id=206 lang=javascript
 *
 * [206] Reverse Linked List
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
 * @return {ListNode}
 */
var reverseList = function(head) {
    let newList = null;
    let current = head;

    while (current) {
        let newItem = current;
        current = current.next;
        newItem.next = newList;
        newList = newItem;
    }

    return newList;
};
// @lc code=end

