const str = "aZESza6?9"; // false
// const str = "?arrb6???4xxbl5???eee5"; // true
// const str = "acc?7??sss?3rr1??????5"; // true

function findAddUpTen(str) {}

function QuestionsMarks(str) {
  res = false;

  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (Number(str[i]) + Number(str[j]) === 10) {
        res = true;
        if (str.slice(i, j).split("?").length - 1 < 3) {
          return false;
        }
      }
    }
  }

  return res;
}

console.log(QuestionsMarks(str));
