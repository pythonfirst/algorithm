const Log = require('../../utils/Log');

//=====判断是否有重复元素
/**
 * 判断数组中是否有重复元素
 * @param {Array} nums 
 * @returns Boolean
 */
function isRepeat(nums) {
  let arr = [];
  for(let i=0; i<=nums.length-1; i++) {
    if (arr.indexOf(nums[i]) !== -1) {
      return true
    } else {
      arr.push(nums[i])
    }
  }
  return false
}

//=====寻找数组中心索引======
/**
 * 寻找数组的中心索引
 * 复杂度：超级差O(n2)
 * @param {Array[number]} nums 
 * @returns 
 */
var pivotIndex = function(nums) {
  function sum(arr) {
    return arr.length ? arr.reduce((a, b) => a+b) : 0
  }
 for (let i=0; i < nums.length; i++) {
     if (sum(nums.slice(0, i)) === sum(nums.slice(i+1))) {
         return i
     }
 }
 return -1
};

/**
 * 寻找数组的中心索引
 * 复杂度：O(n)
 * 总体思路：计算数组的sums
 * for循环计算leftSum;
 * rightSums = sums - leftSums- sums[i]
 * @param {*} nums 
 * @returns 
 */
var pivotIndex = function(nums) {
  let leftSum = 0;
  let rightSum = 0;
  let sum = nums.reduce((a, b) => a+b)
  for (let i=0; i < nums.length; i++) {
      leftSum = i=== 0 ? 0 : leftSum+nums[i-1];
      rightSum = sum-nums[i] - leftSum;
      if (leftSum === rightSum) {
          return i
      } 
  }
  return -1
};

//=====搜索插入位置=====
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function(nums, target) {
  let left = 0;
  let right = nums.length-1;
  let mid;

  while (left <= right) {
      mid = Math.floor(left + (right-left)/2);
      if (nums[mid] === target) {
          return mid
      } else if (nums[mid] > target) {
          right = mid-1;
      } else {
          left = mid+1
      }
  }
  return left
};