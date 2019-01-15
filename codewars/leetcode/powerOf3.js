/* 
Given an integer, write a function to determine if it is a power of three.

Example 1:

Input: 27
Output: true

Example 2:

Input: 0
Output: false

Example 3:

Input: 9
Output: true

Example 4:

Input: 45
Output: false
*/
var isPowerOfThree = function(n) {
  if(n % 2 === 0 || n < 0) {
    console.log('moo')
    return false;
  }
  let i = 0;
  while(Math.pow(3, i) <= n) {
    let currentVal = n / Math.pow(3, i);
    if(n / Math.pow(3, i) === 3 || n === Math.pow(3,i)) {
      console.log('solved')
      return true;
    } else if(currentVal % 3 === 0) {
      console.log(currentVal)
      currentVal = currentVal / 3; 
    } else {
      console.log('moo2')
      return false;
    }
    i++;
  }  
};

isPowerOfThree(45);