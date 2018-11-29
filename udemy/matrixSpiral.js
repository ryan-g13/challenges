// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

// function matrix(n) {
//   // n^2 = max value; 
//   // first row all j = n
//   // second step all i = n - 1 
//   // third step backwards j = n - 1
//   // fourth step up i .... continue pattern. = n - 2
//   const matrix = new Array(n).fill(0).map(() => new Array(n).fill(0));
//   let counter = 1;
//   let lastIndex = [0, 0];
//   let steps = counter % 2 - 1
//   let direction = 'east';
//   switch (direction) {
//     case 'east': {
//       for(let j = lastIndex[0]; j < n; j++) {
//         // if(matrix[i][lastIndex[1]] !== 0){ break }
//         matrix[lastIndex[0]][j] = counter;
//         console.log(matrix);
//         lastIndex[1] = j;
//         counter++;
//       }
//       direction = 'south';
//     }
//     case 'south': {
//       for(let i = lastIndex[0]; i < n; i++) {
//         if(matrix[i][lastIndex[1]] !== 0){ break } 
//         matrix[i][lastIndex[1]] = counter;
//         lastIndex[0] = i;
//         counter++;
//       }  
//       direction = 'west';
//       }
//     case 'west': {
//       for(let j = lastIndex[1]; j > 0; j--) {
//         if(matrix[lastIndex[0]][j] !== 0){ break } 
//         matrix[lastIndex[0]][j] = counter;
//         lastIndex[1] = j;
//         counter++;
//       }  
//       direction = 'north';
//       }
//     case 'north': {
//       for(let i = lastIndex[0]; i > 0; i--) {
//         if(matrix[i][lastIndex[0]] !== 0){ break } 
//         matrix[i][lastIndex[0]] = counter;
//         lastIndex[0] = i;
//         counter++;
//       }  
//       direction = 'east';
//       }
//     default: 
//       break;
//   }
//   return matrix;
// }


// alt thoughts - 
// treat as a perimeter problem going along the outside of a square and figuring out successively smaller squares... 
module.exports = matrix;

// Solution 
function matrix(n) {
  const results = [];
  
  for(let i = 0; i < n; i++) {
    results.push([]);
  }
  let counter = 1; 
  let startCol = 0;
  let endCol = n - 1;
  let startRow = 0;
  let endRow = n - 1;

  while(startCol <= endCol && startRow <= endRow) {
    // top row
    for(let i = startCol; i <= endCol; i++) {
      results[startRow][i] = counter;
      counter++;
    }
    startRow++;
    // right column
    for(let j = startRow; j <= endRow; j++) {
      results[j][endCol] = counter;
      counter++;
    }
    endCol--;
    // bottowm row
    for(let k = endCol; k >= startCol; k--) {
      results[endRow][k] = counter;
      counter++;
    }
    endRow--;
    // left side
    for(let l = endRow; l >= startRow; l--) {
      results[l][startCol] = counter;
      counter++;
    }
    startCol++;
  }
  return results;
}
