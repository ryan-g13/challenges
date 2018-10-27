/*
Given an array A of non-negative integers, return an array consisting of all the even elements of A, followed by all the odd elements of A.

You may return any answer array that satisfies this condition.

Example 1:

Input: [3,1,2,4]
Output: [2,4,3,1]
The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.

Note:

    1 <= A.length <= 5000
    0 <= A[i] <= 5000
*/

var sortArrayByParity = function(A) {
  let odds = [];
  let evens = []; 
  A.forEach((element, index) => {
    if(element % 2 == 0 ) {
      evens.push(A.slice(index, index + 1));
    } else {
      odds.push(A.slice(index, index + 1));
    }
  });
  console.log(evens);
  evens = evens.concat(odds);
  console.log(evens);
};

sortArrayByParity([1,2,3,4,5,6,7,8,9,1,10,10]);