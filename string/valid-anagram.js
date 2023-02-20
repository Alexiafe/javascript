var s = "anagram", t = "nagaram"
// true

// var s = "rat", t = "car"
// false

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    return (s.split("").sort().join("") === t.split("").sort().join(""))
};


console.log(isAnagram(s, t));