// var digits = [1, 2, 3]
// [1,2,4]

// var digits = [4, 3, 2, 1]
// [4, 3, 2, 2]

// var digits = [9]
// [1, 0]

var digits = [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]
// [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,4]


/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    // Start from the least significant digit
    let i = digits.length - 1;

    // Increment the last digit by one
    digits[i]++;

    // Check for carry over to the previous digit
    while (i > 0 && digits[i] > 9) {
        digits[i] = 0;
        digits[i - 1]++;
        i--;
    }

    // Check for carry over to a new most significant digit
    if (digits[0] > 9) {
        digits[0] = 0;
        digits.unshift(1);
    }

    // Return the result
    return digits;
};

console.log(plusOne(digits));