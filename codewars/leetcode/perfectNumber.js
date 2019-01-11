/* 
We define the Perfect Number is a positive integer that is equal to the sum of all its positive divisors except itself.
Now, given an integer n, write a function that returns true when it is a perfect number and false when it is not.

Example:

Input: 28
Output: True
Explanation: 28 = 1 + 2 + 4 + 7 + 14
*/
var checkPerfectNumber = function(num) {
  // Approach 1 iterate to number anything divisible by i % =0 added to array of values, sum final array
  // Approach 2 check to see if divisible by 2 and 3 and work out how many times it is divisible by those factors. 
  let factorSum = 1;
  for(let i = 2; i < num; i++){
    if(num % i === 0 ) {
      factorSum += i;
    }
  }
  if(factorSum === num) {
    return true;
  }
  console.log('nope');
  return false;
};

checkPerfectNumber(28);