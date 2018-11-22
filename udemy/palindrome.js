// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// My solution Big O of N/2 ~~ N; only makes N/2 comparisons
function palindrome(str) {
  let arr = str.split('');
  console.log(arr);
  for(let i = 0; i < arr.length / 2; i++) {
    if(arr[i] !== arr[arr.length - i - 1]) {
      return false;
    }
  }
  console.log('true');
  return true;
}

module.exports = palindrome;

// Solution #1
// function palindrome(str) {
//   const reversed = str.split('').reverse().join('');

//   return str === reversed;
// }

// Solution #2
// function palindrome(str) {
//   return str.split('').every((char, index) => {
//     return char === str[str.length - index - 1];
//   });
// }

// Solution #3 (My Alt solution)
// function palindrome(str) {
//   let flag = true;
//   str.split('').forEach((element, index, array) => {
//     if(!(element === str[str.length - index - 1])) {
//       flag = false;
//     }
//     return flag;
//   });
//   if(flag) {
//     return true;
//   }else return false;
// }