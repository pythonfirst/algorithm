const Log = require('../utils/Log');

/**
 * 二分查找
 * @param {待查找数组} arr 
 * @param {需查找目标数} targetNum 
 */
function binarySearch(arr, targetNum) {
  let low = 0;
  let high= arr.length-1;
  let i = 0  // 记录查询次数
  while (low <= high) {
    i++;
    let mid = Math.floor((low+high)/2);
    let guess = arr[mid];
    if (guess === targetNum) {
      return mid
    } else if (guess < targetNum) {
      low = mid+1;
    } else {
      high = mid-1;
    }
  }
  return null;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
Log('target', binarySearch(arr, 11));