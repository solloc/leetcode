/*
 * @lc app=leetcode id=707 lang=javascript
 *
 * [707] Design Linked List
 */

// @lc code=start
var ListNode = function() {
    /** @type {number} */
    this.val = null;
    /** @type {ListNode} */
    this.prev = null;
    /** @type {ListNode} */
    this.next = null;   
}

ListNode.prototype.toString = function() {
    return `${this.val}`;
}

/**
 * Initialize your data structure here.
 */
 var MyLinkedList = function() {
     /** @type {ListNode} */
     this.head = null;    
     /** @type {ListNode} */
     this.tail = null;
};

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1. 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    console.log(`Get [${index}]: ${this.toString()}`);
    let current = this.head;
    let currentIndex = 0;
    while (current) {
        if (currentIndex === index) {
            break;
        }
        current = current.next;
        currentIndex++;
    }
    if (current) {
        return current.val;
    } else {
        return -1;
    }
    
};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    // console.log(`Add ${val} at head: ${this.toString()}`);
    let prevHead = this.head;

    let newNode = new ListNode();
    newNode.val = val;
    newNode.next = prevHead;
    this.head = newNode;

    if (prevHead) {
        prevHead.prev = this.head;
    } else {
        this.tail = this.head;
    }
    // console.log(`--> ${this.toString()}`);
};

/**
 * Append a node of value val to the last element of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    // console.log(`Add ${val} at tail: ${this.toString()}`);

    if (!this.head) {
        this.addAtHead(val);
        return;
    }

    // console.log(`Tail: ${this.tail}`);
    let prevTail = this.tail;

    let newTail = new ListNode();
    newTail.val = val;
    newTail.prev = prevTail;

    prevTail.next = newTail;

    this.tail = newTail;
    // console.log(`--> ${this.toString()}`);
};

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted. 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    console.log(`Add ${val} at [${index}]: ${this.toString()}`);

    if (!this.head) {
        this.addAtHead(val);
        return;
    }

    if (index === 0) {
        this.addAtHead(val);
        return;
    }

    let newNode = new ListNode();
    newNode.val = val;

    let current = this.head;
    let currentIndex = 0;

    while (current) {
        if (currentIndex === index) {
            break;
        }
        current = current.next;
        currentIndex++;        
    }

    if (current) {
        newNode.prev = current.prev;
        newNode.next = current;
        let prev = current.prev;
        // if (prev) {
            current.prev = newNode;
            prev.next = newNode;            
        // }
        // if (current === this.tail) {
        //     this.tail = newNode;
        // }
    } else {
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
    }

    console.log(`--> ${this.toString()}`);
};

/**
 * Delete the index-th node in the linked list, if the index is valid. 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    let current = this.head;
    let currentIndex = 0;

    while (current) {
        if (currentIndex === index) {
            break;
        }
        
        current = current.next;
        currentIndex++;
    }

    if (current) {
        let prev = current.prev;
        let next = current.next;

        if (prev) {
            prev.next = next;
        }        
        if (next) {
            next.prev = prev;   
        }  

        if (current === this.tail) {
            this.tail = prev;
        }

        if (current === this.head) {
            this.head = next;            
        }
    }    
};

MyLinkedList.prototype.toString = function() {
    let current = this.head;
    let listContent = Array();
    while (current) {
        listContent.push(current.val);
        current = current.next;
    }
    return listContent.toString();
}

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

