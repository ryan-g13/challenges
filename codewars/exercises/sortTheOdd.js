/*
You have an array of numbers.
Your task is to sort ascending odd numbers but even numbers must be on their places.

Zero isn't an odd number and you don't need to move it. If you have an empty array, you need to return it.

Example

sortArray([5, 3, 2, 8, 1, 4]) == [1, 3, 2, 8, 5, 4]
*/

function sortArray(array) {
  if(array.length == 0) {
    console.log('Empty array');
    return array;
  } 
  let oddsArr = [1999999];
  array.forEach((item, index) => {
    if(item % 2 === 1) {
      oddsArr.push(item);
      array[index] = -1;
    }
  })
  oddsArr = oddsArr.sort((a, b) => a - b);
  console.log(oddsArr);
  array.forEach((item, index) => {
    if(item === -1) {
      array[index] = oddsArr.shift();
    }
  })
  console.log(array);
}

sortArray([]);
sortArray([5, 3, 2, 8, 1, 4]);