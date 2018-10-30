/*
The Hamming distance between two integers is the number of positions at which the corresponding bits are different.

Given two integers x and y, calculate the Hamming distance.

Note:
0 ≤ x, y < 231.

Example:

Input: x = 1, y = 4

Output: 2

Explanation:
1   (0 0 0 1)
4   (0 1 0 0)
       ↑   ↑

The above arrows point to positions where the corresponding bits are different.
*/
var hammingDistance = function(x, y) {
  let parsedX = x.toString(2);
  let parsedY = y.toString(2);
  console.log( x, y,'|||', parsedX, parsedY);
  let switchedBits = 0;
  let diff = Math.abs(parsedY.length - parsedX.length);
  let prepend = Array(diff).fill('0');
  console.log(prepend);
  if(x < y) {
    parsedX = prepend.join('') + parsedX; 
  } else {
    parsedY = prepend.join('') + parsedY;
  }
  console.log('after changes', parsedX, parsedY);
  for(let i = parsedY.length; i >= 0; i--) {
    if(parsedY[i] != parsedX[i]) {
      console.log(parsedX[i], '=', parsedY[i]);
      switchedBits++;
    }
  }
  console.log(switchedBits);
  return switchedBits;
};

hammingDistance(4, 14);