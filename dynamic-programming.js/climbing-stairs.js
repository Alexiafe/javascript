var n = 2
// 2

// var n = 3
// 3

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    let ways = 0
    let i = 0
    while (i <= n) {
        if (n % 2 == 0) {
            ways += 2 && i++
            ways += 1 && i++
        } else {
            ways += 1
        }
        i++
    }
    return ways - 1
};

console.log(climbStairs(n))