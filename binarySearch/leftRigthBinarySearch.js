const Log = require('../utils/Log');

/**
 * 在有序升数组中找出target左右边界
 * @param {Array} arrs 
 * @param {num} target 
 */
function range(arrs, target) {
  // 数组为空的case
  if (!arrs.length) return [-1, -1];

  // 找到左值
  let leftNum = findLeft(arrs, target);
  // 找到右值
  let rightNum = findRight(arrs, target);
  return [leftNum, rightNum]
}

/**
 * 找出左值
 * @param {*} arrs 
 * @param {*} target 
 * @returns 
 */
function findLeft(arrs, target) {
  let left = 0;
  let right = arrs.length -1;
  let mid;
  let guess;

  while (left <= right) {
    // 找到中间索引
    mid = Math.floor(left + (right-left) / 2);
    guess = arrs[mid]
    // Log('left, right, mid, guess', left, right, mid, guess)
    if (guess > target) {
      right = mid-1;
    } else if (guess < target) {
      left = mid+1;
    } else if (target === guess) {
      // 因为要找左值，所以继续寻找[left, mid],左右都笔
      right = mid
      if (left === right) {
        return left
      }
    }
  }
  return -1
}

/**
 * 找出右值
 * @param {*} arrs 
 * @param {*} target 
 * @returns 
 */
function findRight(arrs, target) {
  let left = 0;
  let right = arrs.length -1;
  let mid;
  let guess;

  while (left <= right) {
    // 找到中间索引
    mid = Math.floor(left + (right-left +1) / 2);  // 这里为什需要加1呢？是因为我们将left = mid了，如果遇到index[4,5]的情况 4+5/2 >>> 1  === 4,造成死循环了
    guess = arrs[mid]
    // Log('left, right, mid, guess', left, right, mid, guess)
    if (guess > target) {
      right = mid-1;
    } else if (guess < target) {
      left = mid+1;
    } else if (target === guess) {
      // 因为要找左值，所以继续寻找[left, mid],左右都闭
      left = mid
      if (left === right) {
        return left
      }
    }
  }
  return -1
}

// Log('find left', findLeft([1,1,1,1,1,1,1,1,2,2,2,2, 3, 4], 5))
// Log('find right', findLeft([1,1,1,1,1,1,1,1,2,2,2,2, 3, 4], 5))

Log('find left right', range([1,1,1,1,1,1,1,1,2,2,2,2, 3, 4], 10))
// Log('find left', findLeft([5,7,7,8,8,10], 8))
// Log('find right', findRight([5,7,7,8,8,10], 8))
Log('find left', range([5,7,7,8,8,10], 8))
