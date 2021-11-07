/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  // return true if x is palindrome integer
  if (x < 0) return false;
  let str = x.toString();
  console.log(str.split(""), str.split("").reverse());
  return str.split("").join("") === str.split("").reverse().join("");
};

console.log(isPalindrome(121));
