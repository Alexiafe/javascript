s = "leetcode"; // 0
// s = "loveleetcode"; // 2
// s = "aabb"; // -1

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  for (let i = 0; i < s.length; i++) {
    const letter = s[i];
    // If indexOf() equal lastIndexOf() this is a unique character
    if (s.indexOf(letter) === s.lastIndexOf(letter)) {
      return i;
    }
  }
  return -1;
};

console.log(firstUniqChar(s));
