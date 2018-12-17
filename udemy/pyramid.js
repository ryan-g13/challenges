// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
  
  const rowSize = 2 * n - 1;
  for(let i = 1; i < rowSize; i++) {
    let spaces = rowSize - (2 * i - 1);
    if(spaces < 0) {
      break;      
    }
    let rowValue = '';
    for(let j = 0; j < rowSize; j++) {
      if( j < spaces / 2) {
        rowValue += ' ';
      } else if( j < spaces / 2 + (2 * i - 1)) {
        rowValue += '#';
      } else {
        rowValue += ' ';
      }
    } 
    console.log(rowValue);
  }
}

module.exports = pyramid;

// // recursion - my solution 
// function pyramid(n, row = 0, rowValue = '') {
//   if(n === row) {
//     return;
//   }

//   if(rowValue.length === 2 * n - 1) {
//     console.log(rowValue);
//     return pyramid(n, row + 1);
//   }

//   if(rowValue.length < Math.floor((2 * n - 1) / 2) - row ) {
//     rowValue += ' ';
//   } else if (rowValue.length <= Math.floor((2 * n - 1 ) / 2) + row) {
//     rowValue += '#';
//   } else {
//     rowValue += ' ';
//   }
//   pyramid(n, row, rowValue);
// }

// Solution 2 : 
// function pyramid(n) {
//   const midPoint = Math.floor((2 * n - 1) / 2);

//   for(let row = 0; row < n; row ++) {
//     let level = '';

//     for(let column = 0; column < 2 * n - 1; column++) {
//       if(midPoint - row <= column && midPoint + row >= column) {
//         level += '#';
//       } else {
//         level += ' ';
//       }
//     }
//     console.log(level);
//   }
// }

// recursion solution 
// function pyramid(n, row = 0, level = '') {
//   if(n === row) {
//     return; 
//   }

//   if(level.length === 2 * n - 1) {
//     console.log(level);
//     return pyramid(n, row + 1);
//   }

//   const midPoint = Math.floor((2 * n - 1) / 2);
//   let add;
//   if(midPoint - row <= level.length && midPoint + row >= level.length) {
//     add = '#';
//   } else {
//     add = ' ';
//   }
//   pyramid(n, row, level + add);
// }