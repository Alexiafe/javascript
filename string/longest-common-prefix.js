const strs = ["flower", "flow", "flight"]; // fl
// const strs = ["dog", "racecar", "car"]; // empty

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let prefix = strs.reduce((acc, str) => (str.length < acc.length ? str : acc));
  for (let str of strs) {
    while (str.slice(0, prefix.length) != prefix) {
      prefix = prefix.slice(0, -1);
    }
  }
  return prefix;
};

console.log(longestCommonPrefix(strs));
