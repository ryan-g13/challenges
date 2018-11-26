// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
  // iterate n num of times increasing the count of # signs per row
  // length of the string = n 
  // fill rest of row with space chars 
  // console.log each row

  for(let i = 0; i < n; i++) {
    let row = '';
    for(let j = 0; j < n; j++) {
      if(j <= i) {
        row += '#';
      } else {
        row += ' ';
      }
    }
    console.log(row);
  }
}

module.exports = steps;

// recursive solution()
// while i < j print('#')
// while n > i > j print(' ');

// Solution 2 -- not working 
// function steps(n) {
//   let step = '';
//   let row = 1;
//   function printStep(num) {
//     if(num === n) {
//       console.log(step);
//       step = '';
//       row++;
//       return;
//     }
//     if(num < row ) {
//       step += '#';
//     } else {
//       step += ' ';
//     }
//     printStep(num + 1);
//   }
//   printStep(0);
// }

// function steps(n, row = 0, stair = '') {
//   if (n === row) {
//     return;
//   }

//   if(n === stair.length) {
//     console.log(stair);
//     return steps(n, row + 1);
//   }

//   if(stair.length <= row) {
//     stair += '#';
//   } else {
//     stair += ' ';
//   }

//   steps(n, row, stair);
// }