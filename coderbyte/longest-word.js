// const sen = "fun&!! time"; // time
const sen = "I love dogs"; // love

function LongestWord(sen) {
  let clean = sen.replace(/[^a-zA-Z\s]/gi, "").split(" ");
  let result = clean[0];

  for (let i = 1; i < clean.length; i++) {
    if (clean[i].length > result.length) {
      result = clean[i];
    }
  }
  return result;
}

// keep this function call here
console.log(LongestWord(sen));

// other solution
function LongestWord2(sen) {
  var arr = sen.match(/[a-z]+/gi);
  var sorted = arr.sort(function (a, b) {
    return b.length - a.length;
  });
  return sorted[0];
}

console.log(LongestWord2(sen));
