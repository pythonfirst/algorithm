const Log = require('../utils/Log');

/**
 * 计算数字数数组包含的元素个数
 * @param {Array} nums 
 * @returns 
 */
function arrayLength(nums) {
  // Log('nums[0]', nums[0])
  if (nums[0] === undefined) return 0
  while (nums[0] !== undefined) {
    if (nums[1] === undefined) {
     return 1
   } else {
    //  Log('nums[0], else', nums[0])
     return 1+ arrayLength(nums.slice(1,))
   }
  }
}

Log('arrayLength', arrayLength([1,2,3, 5, 8, 10]))
Log('arrayLength', arrayLength([10]))
Log('arrayLength', arrayLength([]))
