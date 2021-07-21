/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

// 递归相对简单，迭代一定要记得用Stack，围绕先进后出的顺序进行考虑迭代。
// 可以从一个简单的二叉树进行归纳。

 root = {
  val: 1,
  left: {
    val: 2,
    left:{
      val:7,
    },
    right: {
      val: 8,
    }
  },
  right: {
    val: 5,
    left: null,
    right: {
      val: 6,
    },
  }
}

//======前序遍历=====

/**
 * 前序遍历-递归
 * 根(前)-左-右
 * 基线条件：node不存在；
 * 递归条件: 有左节点
 * 特殊case：[] => []
 * @param {TreeNode} root 
 * @returns 
 */
function preorderTraversal(root) {
  let result = [];
  function traversal(node) {
    if (!node) return;
    result.push(node.val);
    if (node.left) traversal(node.left);
    if (node.right) traversal(node.right);
  }
  traversal(root);
  return result
}

/**
 * 前序遍历-迭代
 * 根(前)-左-右
 * stack FILO
 * @param {TreeNode} root 
 * @returns 
 */
 function preorderTraversal (root) {
  if (!root) return []; // 边界条件
  let result = [];
  let stack = [root];
  while (stack.length) {
      node = stack.pop(); // 从队列弹出一个node;
      result.push(node.val);
      if (node.right) stack.push(node.right);
      if (node.left) stack.push(node.left);
  }
  return result
}

//======中序遍历=====/**
/**
 * 中序遍历-递归
 * 根(前)-左-右
 * 基线条件：node不存在；
 * 递归条件: 有左节点
 * 特殊case：[] => [] 
 * @param {TreeNode} root 
 * @returns 
 */
function inorderTraversal(root) {
 let result = [];
 function traversal(node) {
   if (!node) return;
   if (node.left) traversal(node.left);
   result.push(node.val);
   if (node.right) traversal(node.right);
 }
 traversal(root);
 return result
}

/**
 * 中序遍历-迭代
 * 根(前)-左-右
 * 特殊case：[] => []
 * 仿照递归写法
 * @param {TreeNode} root 
 * @returns 
 */
 function inorderTraversal(root) {
  let result = [];
  let stack = [];
  while(stack.length || root) {
    if (root) {
      stack.push(root.val);
      root = root.left;
    } else {
      root = stack.pop();
      result.push(root.val);
      root = root.right;
    }                                                                                                                                                                                                                                                                    
  }
  return result;
 }


 //======后序遍历=====
 /**
  * 后序遍历-递归
  * @param {TreeNode} root 
  * @returns 
  */
 var postorderTraversal = function(root) {
  let result = [];

  let traversal = (node) => {
      if (node) {
          traversal(node.left);
          traversal(node.right);
          result.push(node.val)
      }
  }
  traversal(root);
  return result;

};

//======后序遍历=====
 /**
  * 后序遍历-迭代
  * 将前序遍历变体根-右-左进行reverse => 左-右-根 
  * @param {TreeNode} root 
  * @returns 
  */
  var postorderTraversal = function(root) {
    if (!root) return []; // 边界条件
    let result = [];
    let stack = [root];
    while (stack.length) {
        node = stack.pop(); // 从队列弹出一个node;
        result.push(node.val);
        if (node.left) stack.push(node.left);
        if (node.right) stack.push(node.right);
    }
    return result.reverse()
  };



console.log('pre', postorderTraversal(root));

