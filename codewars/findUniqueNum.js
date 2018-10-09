/*
There is an array with some numbers. All numbers are equal except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55

It’s guaranteed that array contains more than 3 numbers.

The tests contain some very huge arrays, so think about performance.

This is the first kata in series:

    Find the unique number (this kata)
    Find the unique string
    Find The Unique

*/

function findUniq(arr) {
  const testMap = new Map();
  let uniqueArr = [];

  for(let i = 0; i < arr.length; i++) {
    if(testMap.has(arr[i])) {
      testMap.set(arr[i], testMap.get(arr[i]) + 1);
    }
    else {
      testMap.set(arr[i], 0);
      if(uniqueArr == -1) {
        uniqueArr.push(arr[i]);
      } else if (!uniqueArr.includes(arr[i])) {
        uniqueArr.push(arr[i]);
      }
    }
  console.log(testMap);
  }

  unique = uniqueArr.filter(element => testMap.get(element) == 0); 
  console.log('true', unique);
  return unique;
}

findUniq([3, 2, 3, 3, 3, 4, 4]);
