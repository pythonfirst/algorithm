function Node(val) {
  this.val = val;
  this.next = null;
  this.pre = null;
}

/**
 * Initialize your data structure here.
 */
 var MyLinkedList = function() {
  this.head = null;
  this.size = 0;
};

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1. 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
  if (index <0 || index >= this.size ) return -1;

  let current = this.head;
  for (let i=0; i<index; i++) {
    current = current.next;
  }
  return current.val;
};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
  if (this.head) {
    let temp = this.head;
    this.head = new Node(val);
    temp.pre = this.head;
    this.head.next = temp;

  } else {
    this.head = new Node(val);
  }
  this.size++;
  return
};

/**
 * Append a node of value val to the last element of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
  // 链表为空的情况
  if (!this.head) {
    this.head = new Node(val);
    this.size++;
    return 
  }

  let current = this.head;
  while (current) {
    if (!current.next) break;
    current = current.next
  }
  current.next = new Node(val);
  current.next.pre = current;
  this.size++;
  return
};

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted. 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
  // 最后一个与节点
  if (index === this.size) {
    this.addAtTail(val)
    return 
  }

  // 第一个节点
  if (index === 0) {
    this.addAtHead(val)
    return
  }
  if (index > this.size) {
    return
  }

  let current = this.head;
  for (let i=0; i<index; i++) {
    current = current.next;
  }

  let target = new Node(val)
  current.pre.next = target
  current.pre.next.pre = current.pre;
  current.pre.next.next = current;
  current.pre = target;
  this.size++
  return
};

/**
 * Delete the index-th node in the linked list, if the index is valid. 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
  if (index <0 || index >=this.size || !this.head) return

  let current = this.head;
  for (let i=0; i< index; i++) {
    current = current.next;
  }

  if (this.size === 1) {
    this.size--;
    this.head = null;
    return
  }

  // 判断是否为最后一个
  if (!current.next) {
    current.pre.next = null;
    this.size--
    return
  }

  // 判断是否为第一个
  if (!current.pre) {
    this.head = current.next;
    this.size--
    return
  }

  // 不是最后一个
  current.pre.next = current.next;
  current.next.pre = current.pre;
  this.size--
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