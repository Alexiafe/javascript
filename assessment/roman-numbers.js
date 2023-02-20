// var s = "III"
// 3

var s = "LVIII"
// 58

// var s = "MCMXCIV"
// 1994

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    var roman = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }
    var result = 0;
    for (var i = 0; i < s.length; i++) {
        if (roman[s[i]] < roman[s[i + 1]]) {
            result -= roman[s[i]];
        } else {
            result += roman[s[i]];
        }
    }
    return result;
};

console.log(romanToInt(s));