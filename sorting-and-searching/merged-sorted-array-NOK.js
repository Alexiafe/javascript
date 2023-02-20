var nums1 = [1, 2, 3, 0, 0, 0], m = 3, nums2 = [2, 5, 6], n = 3
// [1,2,2,3,5,6]

// var nums1 = [1], m = 1, nums2 = [], n = 0
// [1]

// var nums1 = [0], m = 0, nums2 = [1], n = 1
// [1]

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    nums1 = nums1.concat(nums2)
    while (nums1.length > m + n) {
        index = nums1.indexOf(0)
        nums1.splice(index, 1)
    }
    nums1.sort((a, b) => a - b)
    return nums1
};

console.log(merge(nums1, m, nums2, n))