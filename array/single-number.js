// const nums = [2, 2, 1]; // 1
// const nums = [4, 1, 2, 1, 2]; // 4
// const nums = [1] // 1
const nums = [1, 0, 1]; // 0

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    result ^= nums[i];
  }
  return result;
};

console.log(singleNumber(nums));
