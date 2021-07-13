const Log = require('../../utils/Log');

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

Log('isRepeat', isRepeat([1,2,3,4,1]))
Log('isRepeat', isRepeat([1,2,3,4]))
Log('isRepeat', isRepeat([]))


