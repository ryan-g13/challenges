/*
Given an array of integers, find if the array contains any duplicates.

Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

Example 1:

Input: [1,2,3,1]
Output: true

Example 2:

Input: [1,2,3,4]
Output: false

Example 3:

Input: [1,1,1,3,3,4,3,2,4,2]
Output: true

*/

// Built in or .includes for the array. Very slow big O of N^2
// var containsDuplicate = function(nums) {
//   let flag = false;
//   nums.forEach((num, index, array) => {
//   if(array.includes(num, index + 1)) {
//     flag = true;
//   }  
// })
//   return flag;
// };

// Faster solution using sets for comparison of the array of integer values   
var containsDuplicate = function(nums) {
  let numSet = new Set();
  let flag = false;
  nums.forEach(value => {
    if(numSet.has(value)) {
      return flag = true;
    } else {
      numSet.add(value);
    }
  })
  return flag;
};