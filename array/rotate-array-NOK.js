// var nums = [1, 2, 3, 4, 5, 6, 7];
// const k = 3;
// [5,6,7,1,2,3,4]

var nums = [-1, -100, 3, 99];
const k = 2;
// [3,99,-1,-100]

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  // Ok but can do better
  let original = [...nums];
  for (var i = 0; i < original.length; i++) {
    j = (i + k) % original.length;
    nums[j] = original[i];
  }
  console.log(nums);
};

rotate(nums, k);

//   valToPlace = nums[0];
//   for (var i = 0; i < nums.length + 1; i++) {
//     whereToPlace = (k * i) % nums.length;
//     replacedVal = nums[whereToPlace];

//     nums[whereToPlace] = valToPlace;
//     valToPlace = replacedVal;
//     console.log(nums);
//   }
