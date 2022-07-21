// const strArr = ["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]; // "1,4,13"
const strArr = ["1, 3, 9, 10, 17, 18", "1, 4, 9, 10"]; // "1,9,10"

function FindIntersection(strArr) {
  let s1 = strArr[0].split(", ");
  let s2 = strArr[1].split(", ");

  var result = s1.filter((x) => s2.find((s1) => s1 === x));
  return result.length > 0 ? result.join(",") : "false";
}

// keep this function call here
console.log(FindIntersection(strArr));
