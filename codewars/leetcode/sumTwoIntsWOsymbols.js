/*
Calculate the sum of two integers a and b, but you are not allowed to use the operator + and -.

Example 1:

Input: a = 1, b = 2
Output: 3

Example 2:

Input: a = -2, b = 3
Output: 1
*/
// This should work but large numbers become an issue... 
var getSum = function(a, b) {
  let sum = Math.log2(2**a * 2**b);  
  console.log(sum);
  return sum;
};

getSum(-99999, 99998);
// Alternate recursive solution 
// var getSum = function(a, b) {
//   const sum = a ^ b; // XOR uses bitwise logic to show any common bits
//   const carry = (a & b) << 1; // AND uses bitwise to store only both in common 

//   if (!carry) {
//     return sum;
//   }

//   return getSum(sum, carry);
// };