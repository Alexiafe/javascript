var haystack = "sadbutsad", needle = "sad"
// 0

var haystack = "leetcode", needle = "leeto"
// -1

var haystack = "leetcode", needle = "code"
// -1

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    return haystack.indexOf(needle);
};

console.log(strStr(haystack, needle));