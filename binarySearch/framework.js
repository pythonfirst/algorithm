/**
 * 二分查找模版
 * @param {arr} arrs 
 * @param {num} target 
 */
function binarySearch(arrs, target) {
  let left = 0, right = `?`;
  let mid

  while (`?`) {
    mid = Math.floor(left + (right -left) / 2);

    if (arrs[mid] > target) {
      mid = `?`
    } else if ( arrs[mid] < target) {
      mid = `?`
    } else if ( arrs[mid] === target) {
      `?`
    }
  }
  return  `?`
}
