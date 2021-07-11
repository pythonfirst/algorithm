const Log = require('../utils/Log');

/**
 * 找到数组中最小的数字
 * @param {Array} arr 
 * @returns 返回数组中最小的数字
 */
function findSmallest(arr) {
    let smallest = arr[0];
    
    for (let i=0; i<=arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i];
        }
    }
    return smallest
}

/**
 * 将无序数组按照从小到大排列
 * @param {Array} arr 
 * @returns 排序后的数组
 */
function selectedSort(arr) {
    let smallest;
    let sortedArr = [];
    let length = arr.length-1
    for (let i=0; i<= length; i++) {
        // Log('i', i)
        smallest = findSmallest(arr);
        sortedArr.push(arr.splice( arr.findIndex(item => item === smallest), 1)[0])
    }

    return sortedArr
}

Log('sorted', selectedSort([3, 5, 2, 9, 6, 1, 4, 3, 8, 7, 5]))
// Log('findSmallest', findSmallest([3, 5, 2, 9, 6, 1, 4, 3, 8, 7, 5]))