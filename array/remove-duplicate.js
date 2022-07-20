var assert = require("assert");
var nums = [1, 1, 2]; // Input array
var expectedNums = [1, 2]; // The expected answer with correct length

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  var p = 1;
  for (var t = 1; t < nums.length; t++) {
    if (nums[t] > nums[p - 1]) {
      nums[p] = nums[t];
      p++;
    }
  }
  return p;
};

var k = removeDuplicates(nums); // Calls your implementation
console.log(k, nums);
var k = assert(k == expectedNums.length, "Error with k");
for (var i = 0; i < k; i++) {
  assert(nums[i] == expectedNums[i], "Other error");
}
