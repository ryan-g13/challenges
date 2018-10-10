/*
Given an array, find the int that appears an odd number of times.

There will always be only one integer that appears an odd number of times.
*/

function findOdd(A) {
  if(A.length == 1) { 
    console.log('single value =>', A[0]);
    return A[0]; 
  }
  let ansMap = new Map();
  for(let i = 0; i < A.length; i++) {
    if(!ansMap.get(A[i])) {
      ansMap.set(A[i], 1);
    } else if(ansMap.get(A[i])) {
      ansMap.set(A[i], ansMap.get(A[i]) + 1);
    }
    // console.log(ansMap);
  }
  let ans = 0;
  for (var [key, value] of ansMap.entries()) {
    console.log(key + ' = ' + value);
    if(value % 2 == 1) {
      ans = key;
      console.log(key, ans,  'answer');
      return ans;
    }
  }
}

findOdd([10, 11, 10, 15, 15]);