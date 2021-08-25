/*
 * @lc app=leetcode id=234 lang=javascript
 *
 * [234] Palindrome Linked List
 */

// @lc code=start
/**
 * @typedef ListNode
 * @property {number} val
 * @property {ListNode} next 
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let reversed = null;
    let current = head;
    while (current) {
        var revNode = new ListNode();
        revNode.val = current.val;
        revNode.next = reversed;
        reversed = revNode;
        
        current = current.next;
    }

    current = head;

    let isPalindrome = true;

    while (current) {
        if (current.val !== reversed.val) {
            isPalindrome = false;
            break;
        }
        
        current = current.next;
        reversed = reversed.next;
    }

    return isPalindrome;
};
// @lc code=end

