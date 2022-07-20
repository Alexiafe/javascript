// let s = ["h", "e", "l", "l", "o"];
let s = ["a", "b", "c", "d", "e", "f", "g"];

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
// if its already an array
var reverseString = function (s) {
  for (let i = 0; i < s.length / 2; i++) {
    v = s[i];
    s[i] = s[s.length - i - 1];
    s[s.length - i - 1] = v;
  }
  console.log(s);
};

reverseString(s);

// if its NOT an array
function reverseString2(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString2("hello"));
