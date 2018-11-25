// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  // Create a new 2d storage array to return
  // create a loop to iterate through input values
  // set upper bound of loop 
  // fill 2d array with values from original array
  // return filled 2d array
  // edge cases size of 0? do you need to pass all of the parameters? default behavior? 
  const chunkedArr = [];
  // const cArr = Array(size) = Array.fill('null');
  // for (let item in array) {

  // }
  let chunk = -1;
  for (let i = 0; i < array.length; i ++) {
    if (i % size === 0 ) { 
      chunk ++
      chunkedArr.push([array[i]]);   
    } else {
      chunkedArr[chunk].push(array[i]);
    }
  }
  return chunkedArr;
}

module.exports = chunk;

// 1 solution
// function chunk(array, size) {
//   const chunked = [];
//   for(let element of array) {
//     const last = chunked[chunked.length -1];
    
//     if (!last || last.length === size) {
//       chunked.push([element]);
//     } else {
//       last.push(element);
//     }
//   }
//   return chunked;
// }

// Solution 2 using slice
// function chunk(array, size) {
//   const chunked = [];
//   let index = 0;

//   while(index < array.length) {
//     chunked.push(array.slice(index, index + size));
//     index += size;
//   }
//   return chunked;
// }