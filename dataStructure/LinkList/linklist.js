/**
 * link node
 * @param {any} val 
 */
function Node(val) {
  this.val = val;
  this.next = null;
}

function LinkList() {
  this.size = 0; // 初始化链表设置为0;
  this.head = null;
}

/**
 * 查找链表中的元素
 * @param {*} index 
 * @returns 
 */
LinkList.prototype.get = function(index) {
}

/**
 * 添加头节点
 * @param {*} val 
 * @returns 
 */
LinkList.prototype.addHead = function(val) {
  let node = new Node(val);
  let temp = this.head;
  this.head = node;
  node.next = temp;
  this.size++;  
  return 
}

/**
 * 添加尾节点
 * @param {*} val 
 * @returns 
 */
LinkList.prototype.addTail = function(val) {
  let node = this.head
  for (let i=0; i< this.size; i++) {
    node = node.next;
  }
  node.next = val;
  node.next.next = null;
  return
}

/**
 * 插入元素到index之前
 * @param {*} index 
 * @param {*} val 
 * @returns 
 */
LinkList.prototype.addIndex = function(index, val) {
  let node = this.head;
  // 如果index<0,则添加到head
  if (index<0) this.addHead(val);
  // 如果index>0, 则添加到尾部
  if (index>this.size-1) this.addTail(val);

  for (let i=0; i<this.size && i<index; i++) {

  }
  return 
}

/**
 * 删除第index个元素
 * @param {*} index 
 * @param {*} val 
 * @returns 
 */
 LinkList.prototype.addInde = function(index, val) {
  return 
}