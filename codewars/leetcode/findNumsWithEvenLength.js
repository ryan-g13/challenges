/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
  // convert to string. 
  // compute length if even add to count
  let count = 0;
  for(let i = 0; i < nums.length; i++) {
      if(nums[i].toString().length % 2 === 0) {
          count++;
      }
  }  
    return count;
};

findNumbers([12,345,2,6,7896]);
// expected output to be 2