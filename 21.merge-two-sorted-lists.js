/*
 * @lc app=leetcode id=21 lang=javascript
 *
 * [21] Merge Two Sorted Lists
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
var mergeTwoLists = function(l1, l2) {
    if (!l2) {
        return l1;
    }
    if (!l1) {
        return l2;
    }
    let primary = l1;
    let secondary = l2;
    if (l2.val < l1.val) {
        primary = l2;
        secondary = l1;
    }

    let currentPrimary = primary;
    let currentSecondary = secondary;
    let tail = null;
    while (currentPrimary) {
        while (currentSecondary) {
            if (currentPrimary.next && currentSecondary.val < currentPrimary.next.val) {
                let newPrimary = currentSecondary;
                currentSecondary = currentSecondary.next;
                newPrimary.next = currentPrimary.next;
                currentPrimary.next = newPrimary;
            } else {
                break;
            }
        }        
        if (!currentPrimary.next) {
            tail = currentPrimary;
        }
        currentPrimary = currentPrimary.next;
    }

    tail.next = currentSecondary;

    return primary;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = mergeTwoLists;
// @after-stub-for-debug-end