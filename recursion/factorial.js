const Log = require('../utils/Log');

/**
 * 阶乘
 * @param {Number} num 
 * @returns 
 */
function factorial(num) {
    Log('num', num)
    // 基线条件
    if (num === 1) {
        return 1
    } else {
        return num * factorial(num-1)
    }
}

Log('factorial', factorial(3))