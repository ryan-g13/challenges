/*
Implement function ToLowerCase() that has a string parameter str, and returns the same string in lowercase.

Example 1:

Input: "Hello"
Output: "hello"

Example 2:

Input: "here"
Output: "here"

Example 3:

Input: "LOVELY"
Output: "lovely"

*/

var toLowerCase = function(str) {
  let ans = [];
  str.split('').forEach(letter => {
    if(letter.toUpperCase() === letter) {
      if(letter.charCodeAt(0) > 64 && letter.charCodeAt(0) < 91) {
      let temp = (letter.charCodeAt(0) + 32)
      console.log(letter);
      letter = String.fromCharCode(temp);
      console.log(letter);
      }
    }
    ans.push(letter);
  })  
  console.log(ans.join(''));
  return ans.join('');
};

toLowerCase('!Ban,?AnaS');