var nums1 = [1, 2, 2, 1], nums2 = [2, 2]
// [2,2]

var nums1 = [4, 9, 5], nums2 = [9, 4, 9, 8, 4]
// [4,9] or [9,4]


/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
    let intersect = [];
    let smaller = nums1.length < nums2.length ? nums1 : nums2;
    let bigger = nums1.length < nums2.length ? nums2 : nums1;
    for (let i = 0; i < smaller.length; i++) {
        let index = bigger.indexOf(smaller[i]);
        if (index > -1) {
            intersect.push(smaller[i]);
            bigger.splice(index, 1);
        }
    }
    return intersect

};

console.log(intersect(nums1, nums2));