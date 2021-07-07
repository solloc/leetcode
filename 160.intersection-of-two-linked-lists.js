/*
 * @lc app=leetcode id=160 lang=javascript
 *
 * [160] Intersection of Two Linked Lists
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
 * @typedef ListNode
 * @property {number} val
 * @property {ListNode} next
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    /**
     * @type {Set<ListNode>}
     */
    let setA = new Set();
    let currentHeadA = headA;
    while (currentHeadA) {
        if (setA.has(currentHeadA)) {
            break;
        }
        setA.add(currentHeadA);
        currentHeadA = currentHeadA.next;
    }

    /**
     * @type {Set<ListNode>}
     */
    let setB = new Set();
    let currentHeadB = headB;
    while (currentHeadB) {
        if (setB.has(currentHeadB)) {
            break;
        }
        if (setA.has(currentHeadB)) {
            return currentHeadB;
        }        
        setB.add(currentHeadB);
        currentHeadB = currentHeadB.next;
    }

    return null;    
};
// @lc code=end

