// const nums = [2, 2, 1]; // 1
// const nums = [4, 1, 2, 1, 2]; // 4
// const nums = [1] // 1
const nums = [1, 0, 1]; // 0

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let output = nums[0];
  if (nums.length == 1) return nums[0];
  let i = 0;
  while (i <= nums.length) {
    if (output == nums[i + 1]) {
      output = nums[i + 1];
      i++;
    }
    i++;
  }
  return output;
};

console.log(singleNumber(nums));
