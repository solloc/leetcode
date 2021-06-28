/*
 * @lc app=leetcode id=141 lang=javascript
 *
 * [141] Linked List Cycle
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
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let normal = head;
    let fast = head;
    let posNormal = -1;
    let posFast = -1;
    while (normal) {
        posNormal++;
        posFast++;
        if (fast) {
            fast = fast.next;
            posFast++;
        }        
        if (fast) {
            if (fast === normal) {
                console.log(`${normal.val} === ${fast.val}`);
                return true;
            }
        }
        if (fast) {
            fast = fast.next;
        }        
        normal = normal.next;
    }    
    return false;
};
// @lc code=end

