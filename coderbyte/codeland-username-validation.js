// const str = "aa_"; // false
const str = "u__hello_world123"; // true

function CodelandUsernameValidation(str) {
  if (4 > str.length || str.length > 25) return false;
  if (typeof str[0] !== "string") return false;
  if (!/^\w+$/.test(str)) return false;
  if (str[str.length] == "_") return false;

  return true;
}

// keep this function call here
console.log(CodelandUsernameValidation(str));

// other solution
function CodelandUsernameValidation(str) {
  const valid_reg = /^[A-Za-z]\w+[A-Za-z0-9]$/;
  const valid_length = (str) => str.length >= 4 && str.length <= 25;
  return valid_reg.test(str) && valid_length(str);
}
