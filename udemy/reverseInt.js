// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  // Convert int into an array
  let arr = n.toString().split('');
  let sign = 'pos';
  // parse negative sign if present
  if(arr[0] === '-') {
    sign = 'neg';
    arr = arr.slice(1);
  }
  // reverse the array of values
  arr.reverse();
  // trim leading zeroes
  let encounter = 0;
  for(let i = 0; i < arr.length; i++) {
    if (arr[i] === '0') {
      encounter++;
    }
  } 
  if (encounter !== arr.length){ // number of all zeroes
  arr = arr.slice(encounter);
  }
  if (sign === 'neg') {
    arr.unshift('-');
  }
  // return value as int
  return parseInt(arr.join(''));
}

module.exports = reverseInt;

// Alt solution 
// function reverseint(n) {
//   const reversed = n.toString().split('').reverse().join('');

//   return parseInt(reversed) * Math.sign(n);
//   This is powerful parseInt removes trailing neg sign and 
//   Math.sign returns negative 1 if negative otherwise 1
// }