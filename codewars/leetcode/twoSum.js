/* 
Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1]. 
*/

var twoSum = function(nums, target) {
   let targetComp = 0;
   for(let i = 0; i < nums.length; i++) {
     targetComp = target - nums[i];
     for(let j = i + 1; j < nums.length; j++) {
       if(targetComp === nums[j]) {
         console.log( [i, j])
         return [i, j];
       }
     }
   } 
};

let arr = [ 1, 7, 11, 2];
let targ = 13;
twoSum(arr, targ);