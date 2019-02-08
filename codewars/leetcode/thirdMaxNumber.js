/*
Given a non-empty array of integers, return the third maximum number in this array. If it does not exist, return the maximum number. The time complexity must be in O(n).

Example 1:

Input: [3, 2, 1]

Output: 1

Explanation: The third maximum is 1.

Example 2:

Input: [1, 2]

Output: 2

Explanation: The third maximum does not exist, so the maximum (2) is returned instead.

Example 3:

Input: [2, 2, 3, 1]

Output: 1

Explanation: Note that the third maximum here means the third maximum distinct number.
Both numbers with value 2 are both considered as second maximum.
*/

var thirdMax = function(nums) {
  console.log(nums);
  if(nums.length < 3) {
    return nums[0] > nums[1] ? nums[1] : nums[0];
  }
  let max = -999;
  let secNum = -1;
  let thirdNum = -1;
  nums.forEach(number => {
    if(number > max ) {
      let temp = max;
      max = number; 
      let temp2 = secNum;
      secNum = temp;
      thirdNum = temp2;
    } else if (number > secNum && number !== max) {
      let temp = secNum;
      thirdNum = temp;
      secNum = number;
    } else if (number >= thirdNum && number !== max && number !== secNum) {
      thirdNum = number;
    }
  });
  console.log(thirdNum, secNum, max);
  return thirdNum;
};

let numbers = [2, 2, 4 ,5, 5, 5 ];
thirdMax(numbers);
