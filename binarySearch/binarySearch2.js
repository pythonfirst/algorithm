const Log = require('../utils/Log');

/**
 * 二分查找注意事项：
 * 1. 注意high的取值不能大于数组的索引数
 * 2. 注意循环退出条件
 * 3. 注意测试不同边界case
 */

/**
 * 二分查找
 * @param {Array} arrs 已知数组
 * @param {any} target 目标元素
 * 这个版本存在的问题：默认arrs中必有target，可以用guess !== target;
 * 如果arrs中没有target，则会造成死循环
 */
function binarySearch1(arrs, target) {
  let high = arrs.length-1;
  let low = 0;
  let mid;
  let guess;

  while (taget !== guess) {

    mid =  Math.floor((high + low) / 2);

    guess = arrs[mid];

    Log('guess, target, high, low, mid', guess, target, high, low, mid );

    if (guess > target) {
      high = mid-1;
    } else if (guess < target) {
      low = mid+1;
    } else {
      return mid
    }
  }
  return false
}


/**
 * 二分查找
 * @param {Array} arrs 已知数组
 * @param {any} target 目标元素
 * 这个版本存在的问题：
 */
 function binarySearch2(arrs, target) {
  let high = arrs.length-1;
  let low = 0;
  let mid;
  let guess;
  let i = 0;

  while (low <= high) {
    i++
    mid =  Math.floor((high + low) / 2);

    guess = arrs[mid];

    Log('guess, target, high, low, mid, count', guess, target, high, low, mid, i );

    if (guess > target) {
      high = mid-1;
    } else if (guess < target) {
      low = mid+1;
    } else {
      return mid
    }
  }
  return false
}

/**
 * 二分查找
 * @param {Array} arrs 已知数组
 * @param {any} target 目标元素
 * 这个版本改进点为： 避免left+right直接相加导致溢出；
 */
 function binarySearch3(arrs, target) {
  let high = arrs.length-1;
  let low = 0;
  let mid;
  let guess;
  let i = 0;

  while (low <= high) {
    i++
    mid =  Math.floor((high + low) / 2);

    guess = arrs[mid];

    Log('guess, target, high, low, mid, count', guess, target, high, low, mid, i );

    if (guess > target) {
      high = mid-1;
    } else if (guess < target) {
      low = mid+1;
    } else {
      return mid
    }
  }
  return false
}
// test case
Log('=====target index=====', binarySearch3([1,2,4,5,6], 6))  // 奇数最后一个
Log('=====target index=====', binarySearch3([1,2,4,5,6], 1))  // 奇数第一个
Log('=====target index=====', binarySearch3([1,2,4,5], 5))  // 偶数最后一个
Log('=====target index=====', binarySearch3([1,2,4,5], 1))  // 偶数第一个
Log('=====target index=====', binarySearch3([], 6))  // 空数组