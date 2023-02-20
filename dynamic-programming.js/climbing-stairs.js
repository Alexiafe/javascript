var n = 2
// 2

var n = 3
// 3

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    if (n <= 1) {
        return 1;
    }
    let prev = 1;
    let curr = 1;
    for (let i = 2; i <= n; i++) {
        let next = prev + curr;
        prev = curr;
        curr = next;
    }
    return curr;
}



console.log(climbStairs(n))