// Goal 

// Input: integer values in an array 
// Output: return the value closest to newly defined origin aka 2nd input value  
// 

function calcValue(array, target ) {
  // var index min value 
  // var abs dis to target 
  let index = -1;
  let absDist = null; 
  
  array.forEach((temp, i) => {
   if(absDist === null || Math.abs(target - temp) < absDist) {
     absDist = Math.abs(target - temp);
     index = i;
   }
  });
  console.log(array[index]);
  return array[index];
};

let testArr = [3, -20, 1, -8, 7, 4, 11, -3 ];
let testTar = -20;

calcValue(testArr, testTar);
// Big O looking at Big 0 of N  => N is lenght of array

// recursive solution 
// 4 parameters 
// 
module.exports = calcValue;