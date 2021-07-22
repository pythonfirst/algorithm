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

//======层序遍历=====
var levelOrder = function(root) {
  let result = [];
  let queue = [root];
  let node
  let current = [];
  let temp = [];
  if (root) {
    while (queue.length) {
      node = queue.shift();
      current.push(node.val);
      if (node.left) temp.push(node.left)
      if (node.right) temp.push(node.right)
      if (!queue.length) {
          result.push(current);
          current = [];
          queue = [...temp]
          temp = [];
      } 
    }
  }
  return result
};

//=====二叉树最大深度=====
/** 自顶向下递归
 * @param {TreeNode} root
 * @return {number}
 */
 var maxDepth = function(root) {
  let answer = 0;
  if (!root) return root;

  function findDepth(node, depth) {
      if (!node.left && !node.right) { // 基线条件=>退出条件（是否为leaf节点）
         if (depth > answer) answer = depth;
      }
      if (node.left) findDepth(node.left, depth+1); // 递归条件
      if (node.right) findDepth(node.right, depth+1) // 递归条件
  }
  findDepth(root, 1)
  return answer;
};

/** 自下向上递归
 * @param {TreeNode} root
 * @return {number}
 */
 var maxDepth = function(root) {
  let result = 0;
  if (!root) return result;
  let leftDepth = maxDepth(root.left);
  let rightDepth = maxDepth(root.right);
  result = leftDepth > rightDepth ? leftDepth+1 : rightDepth+1;
  return result
};

//=====对称二叉树====
/**
 * 递归解法
 * @param {TreeNode} root
 * @return {boolean}
 * 中心思想：三个基线条件一个递归条件+一个边界case。
 */
 var isSymmetric = function(root) {
  if (!root) return true;  // 边界条件
  function dfs(left, right) {
   if (!left && !right) return true;  // 左右都没有返回true; 基线条件
   if (!(left && right)) return false; // 左右只有一个右返回false; 基线条件
   if (left.val !== right.val) return false; // 左右的值不相等返回false; 基线条件
   return dfs(left.left, right.right) && dfs(left.right, right.left) // 递归条件：如果左右都有，则比较left.right 和right.left 以及 left.left 及right.right;
  }
  return dfs(root.left, root.right)
};


/**
 * 迭代解法
 * @param {TreeNode} root
 * @return {boolean}
 * 中心思想：使用queue来维护，每次pop两个item，每次push的item为成对的，比如left.left和right.right; left.right 和 right.left;
 */
 var isSymmetric = function(root) {
  if (!root) return true; // 边界case
  let queue = [root.left, root.right];
  while (queue.length) {
      let left = queue.shift();
      let right = queue.shift();
      if (!left && !right) continue; // left right 都不存在需要continue,这个和递归有点区别，需要特别注意容易出错的点。
      if (!(left && right)) return false;  // left right 有一个存在
      if (left.val !== right.val) return false;
      queue.push(left.left, right.right, left.right, right.left);
  }
  return true
}