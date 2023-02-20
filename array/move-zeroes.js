var nums = [0, 1, 0, 3, 12]
// [1,3,12,0,0]

// var nums = [0]
// [0]

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes1 = function (nums) {
    // My function
    let zeroes = 0;
    i = nums.indexOf(0);
    while (i !== -1) {
        zeroes++;
        nums.splice(i, 1);
        i = nums.indexOf(0);
    }
    for (let i = 0; i < zeroes; i++) {
        nums.push(0);
    }
    console.log(nums)

};

console.log(moveZeroes1(nums));



var moveZeroes2 = function (nums) {
    // CHAT GPT function
    let nonZeroIndex = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[nonZeroIndex] = nums[i];
            nonZeroIndex++;
        }
    }
    while (nonZeroIndex < nums.length) {
        nums[nonZeroIndex] = 0;
        nonZeroIndex++;
    }
    console.log(nums)
};

console.log(moveZeroes2(nums));