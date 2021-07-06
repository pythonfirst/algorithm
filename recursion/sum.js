const Log = require('../utils/Log');

/**
 * 计算数字数组的和
 * @param {Array} nums 
 * @returns 
 */
function Sum(nums) {
    // Log('length', nums.length)
    if (nums.length === 0) {
        return 0
    } else if (nums.length === 1) {
        return nums[0]
    } else {
        return nums[0] + Sum(nums.slice(1,))
    }
}

Log('SUM', Sum([1,2,3, 5, 8, 10]))
Log('SUM', Sum([10]))
Log('SUM', Sum([]))
