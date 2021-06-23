/*
 * @lc app=leetcode id=707 lang=javascript
 *
 * [707] Design Linked List
 */

// @lc code=start
/**
 * 
 * @param {number} value 
 * @param {LinkItem} next 
 */
 function LinkItem(value, next) {
    this.value = value;
    this.next = next;
}

/**
 * Initialize your data structure here.
 */
var MyLinkedList = function() {
    this.head = null;
};

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1. 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    console.log(`--- get ---`);
    let current = this.head;
    let currentIndex = 0;    
    while(current !== null) {
        console.log(`current: ${current.value}`);
        if(currentIndex === index) {
            return current.value;
        }
        current = current.next;
        currentIndex++;
    }    
};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    let previousHead = this.head;
    this.head = new LinkItem(val, previousHead);
};

/**
 * Append a node of value val to the last element of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    let current = this.head;
    while(current.next !== null) {
        current = current.next;
    }
    current.next = new LinkItem(val, null);
};

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted. 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    let current = this.head;
    let currentIndex = 0;
    while(current !== null) {
        if (currentIndex = index) {
            let formerNext = current.next;
            current.next = new LinkItem(val, formerNext);
            break;
        }
        current = current.next;
        currentIndex++;
    }
    
};

/**
 * Delete the index-th node in the linked list, if the index is valid. 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    console.log(`--- deleteAtIndex ---`);
    let current = this.head;
    let currentIndex = 0;
    while(current !== null) {
        console.log(`current: ${current.value}`);
        if ((currentIndex+1) === index) {
            // let afterDeleted = current.next.next;
            console.log(`next: ${current.next.value}`);
            // let formerNext = current.next.next;
            console.log(`former next: ${current.next.next.value}`);
            current.next = current.next.next;
            break;
        }
        current = current.next;
        currentIndex++;
    } 
};



/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
// @lc code=end


// @after-stub-for-debug-begin
module.exports = MyLinkedList;
// @after-stub-for-debug-end