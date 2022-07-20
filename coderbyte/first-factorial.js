const num = 4; // 24
// const num = 8; //40320

function FirstFactorial(num) {
  let sum = 1;
  for (let i = 1; i <= num; i++) {
    sum = sum * i;
  }
  // code goes here
  return sum;
}

// keep this function call here
console.log(FirstFactorial(num));


/////////////////////////////
// other solution

function FirstFactorial(num) {
  return num === 1 ? 1 : num * FirstFactorial(num - 1);
}

// keep this function call here
FirstFactorial(num);
