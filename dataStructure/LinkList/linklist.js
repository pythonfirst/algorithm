/**
 * Initialize your data structure here.
 */
 function Node(val) {
  this.val = val;
  this.next = null;
}   
var MyLinkedList = function() {
    this.size = 0; // 初始化链表设置为0;
    this.head = null;
};

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1. 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    if (index <0 || index >=this.size) return -1;
    let node = this.head;
    for (let i=0; i<this.size && i<index; i++) {
        node = node.next;
    }
    return node ? node.val : node
};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    let node = new Node(val);
    let temp = this.head;
    this.head = node;
    node.next = temp;
    this.size++;  
    return 
};

/**
 * Append a node of value val to the last element of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    let node = this.head
    for (let i=0; i< this.size-1; i++) {
        node = node.next;
    }
    if (node) {
        node.next = new Node(val);
        node.next.next = null;
    } else {
        this.head = new Node(val)
    }
    this.size++
};

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted. 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    // 如果index<0,则添加到head
  if (index<=0) return this.addAtHead(val);
  // 如果index>0, 则添加到尾部
  if (index>this.size) return this.addAtTail(val);

  let node = this.head;
  for (let i=0; i<this.size-1 && i<index-1; i++) {
    node = node.next;
  }

  let temp = node.next;
  node.next = new Node(val);
  node.next.next = temp;
  this.size++
  return 
};

/**
 * Delete the index-th node in the linked list, if the index is valid. 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    if (index >= this.size) return
    // 如果index小于0，则删除头节点
    if (index === 0) {
        this.head = this.head.next;
    }  else {
        let node = this.head
        for (let i=0; i< this.size-1 && i<index-1; i++) {node = node.next;}
        if (node.next.next) {
            node.next = node.next.next;
        } else {
            node.next = null
        }
    }
    this.size--;
    return 
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(1)
 * obj.addAtTail(10)
 * obj.addAtIndex(1,1)
 * obj.deleteAtIndex(1)
 */