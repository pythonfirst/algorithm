const Log = require('../utils/Log');

//=====冒泡排序=====
/**
 * 双指针
 * flag标识某次循环是否有操作
 * @param {*} nums
 * @returns 
 */
function bubbleSort(nums) {
    let n = nums.length;
    if (n<=1) return nums; // 边界case
    let temp;
    for (let i=0; i<n; i++) {
        let flag = false;
        for (let j=0; j < n-i; j++) {
            if (nums[j] > nums[j+1]) {
                temp = nums[j+1];
                nums[j+1] = nums[j];
                nums[j] = temp;
                flag = true
            }
        }
        if (!flag) {
            break
        }
    }
    return nums
}

/**
 * 双指针
 * flag标识某次循环是否有操作
 * 记录上次最后一个交换位置的索引。
 * @param {*} nums
 * @returns 
 */
 function bubbleSort(nums) {
    let n = nums.length;
    if (n<=1) return nums; // 边界case
    let temp;
    let flag = true;
    let lastSwapIndex = nums.length-1;
    let tempSwapIndex;
    while (flag) {
        for (let i=0; i<lastSwapIndex; i++) {
            if (nums[i] > nums[i+1]) {
                // temp = nums[i];
                // nums[i] = nums[i+1];
                // nums[i+1] = temp;
                // 位操作交换变量值
                nums[i]^=nums[i+1]
                nums[i+1]^=nums[i];
                nums[i]^=nums[i+1];
                tempSwapIndex = i;
            }
        }
        if (tempSwapIndex) {
            lastSwapIndex = tempSwapIndex+1;
            tempSwapIndex = undefined;
            continue
        }
        flag = false
    }
    return nums
 }
  

// Log(bubbleSort([1,2,4,6,3,5, 0, 50]));

 

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

/**
 * 选择排序
 * 双指针
 * 使用位运算来实现不使用第三方变量交换两个变量的值
 * @param {Array} arr 
 * @returns 
 */
 var sortArray = function(nums) {
     let minIndex;
     let temp;
    for (let i=0; i<nums.length; i++) {
        minIndex = i;
        for (let j=i; j<nums.length; j++) {
            if (nums[j] < nums[minIndex]) {
                minIndex = j
            }
        }
        // temp = nums[i];
        // nums[i] = nums[minIndex];
        // nums[minIndex] = temp;
        if (i !== minIndex) {
            nums[i] ^= nums[minIndex];
            nums[minIndex] ^= nums[i];
            nums[i] ^= nums[minIndex];
        }
    }
    return nums
};

/**
 * 选择排序：
 * 双指针
 * 记录最大最小值
 * @param {*} nums 
 * @returns 
 */
var sortArray = function(nums) {
    let minIndex, maxIndex;
    for (let i=0; i<nums.length/2; i++) {
        minIndex = i;
        maxIndex = i;
        for (let j=i; j<nums.length-i; j++) {
            if (nums[j]> nums[maxIndex]) {
                maxIndex = j;
            }
            if (nums[j] < nums[minIndex]) {
                minIndex = j;
            }
        }
        
        // 如果最大最小index相等，则结束
        if (minIndex === maxIndex) break;

        if (minIndex !== i) {
            nums[i] ^=nums[minIndex];
            nums[minIndex] ^=nums[i];
            nums[i] ^=nums[minIndex];
        }
        if (maxIndex === i) maxIndex = minIndex;
        if (maxIndex !== nums.length -i-1){
            nums[nums.length -i-1] ^= nums[maxIndex];
            nums[maxIndex] ^= nums[nums.length -i-1];
            nums[nums.length -i-1] ^= nums[maxIndex];
        } 
    }
    return nums
};

/**
 * 插入排序
 * @param {*} nums 
 * @returns 
 */
var sortArray = function(nums) {
    let j;
    for (let i=1; i< nums.length; i++) {
        j= i;
        while(j>=1 && nums[j] < nums[i-1]) {
            nums[j] ^= nums[j-1];
            nums[j-1] ^= nums[j];
            nums[j] ^= nums[j-1];
            j--;
        }
    }
    return nums
};

//=====快速排序=====
/**
 * 快速排序
 * 分治思想
 * @param {Array} nums 
 * @returns 
 */
var sortArray = function(nums) {
    if (nums.length < 2) return nums;
    let left = [];
    let right = [];
    let midIndex =Math.floor(nums.length/2);
    let pivot = nums[midIndex];
    for (let i=0; i< nums.length; i++) {
        if (i !== midIndex) {
            if (nums[i] <= pivot) left.push(nums[i]);
            if (nums[i] > pivot) right.push(nums[i]);
        }
    }

    return [...sortArray(left), pivot, ...sortArray(right)]
};

//=====strStr()=====
/**
 * strStr()
 * 超级暴力： 遍历所有子串与needle比较
 * !AC
 * @param {*} haystack 
 * @param {*} needle 
 * @returns 
 */
var strStr = function(haystack, needle) {
    if (needle === '') return 0;
    // if (needle === haystack) return 0;
    let sub = ''
    outer:
    for (let i=0; i<haystack.length; i++ ) {
        sub = '';
        for (let j=i; j<haystack.length; j++) {
            if (sub > needle.length) continue outer;
            sub += haystack[j];
            if (sub === needle) {
                return i
            }
        }
    }
    return -1
};

/**
 * strStr()
 * 暴力解法：遍历所有与needle相同长度的子串，如果遇到不同的则立即匹配下一个
 * AC
 * @param {*} haystack 
 * @param {*} needle 
 * @returns 
 */
var strStr = function(haystack, needle) {
    let n = haystack.length;
    let m = needle.length;
    outer:
    for (let i=0; i+m <=n; i++) {
        for (let j=0; j<m; j++) {
            if (haystack[i+j] !== needle[j]) {
                continue outer
            }
        }
        return i
    }
    return -1
};
// Log(strStr("a", "a",))
// Log('sorted', selectedSort([3, 5, 2, 9, 6, 1, 4, 3, 8, 7, 5]))
// Log('findSmallest', findSmallest([3, 5, 2, 9, 6, 1, 4, 3, 8, 7, 5]))