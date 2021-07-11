const Log = require('../utils/Log');

/**
 * 找出数组中最大的数字
 * @param {Array} nums 
 * @returns 
 */
function findBiggest(nums) {
   if (!nums.length) {
    return []
   } else if (nums.length === 1) {
    return nums[0]
   } else {
     let biggest = findBiggest(nums.slice(1))
     if (nums[0] > biggest) {
      return nums[0]
     } else {
      return biggest
     }
   }
}

Log('biggest', findBiggest([1,2,3, 5, 8, 10]))
Log('findBiggest', findBiggest([9, 14]))
Log('findBiggest', findBiggest([]))
