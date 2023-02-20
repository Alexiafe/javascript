
// var x = 123
// 321

// var x = -123
// -321

var x = 120
// 21

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let y = x.toString().split("").reverse().join("");
    y = parseInt(y);
    y = x < 0 ? -y : y;
    if (y > 2147483647 || y < -2147483648) {
        return 0;
    }
    return y;
};

console.log(reverse(x));

