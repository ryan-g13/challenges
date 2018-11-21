// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  let ans = '';
  for(let i = str.length - 1; i >= 0; i--) {
    ans += str[i];
  }
  return ans;
}

module.exports = reverse;


// alt solutions: 
// 1. in place swapping of letters working towards the middle. Not working currently!
// function reverse(str) {
//   for(let i = 0; i < str.length / 2; i++) {
//     let temp = str.charAt(i);
//     str[i] = str.charAt(str.length - i);
//     str[str.length - i] = temp;
//   }
//   return str;
// }
// 2. normal solution for me
// function reverse(str) {
//  let ans = '';  
// for (let char of str) {          new for loop syntax *** 
//    ans += char;
// }
// return ans;
// }

// 3. string.split array.reverse array.join ==> return result
// function reverse(str) {
//   return str.split('').reverse().join('');
// }

// 4. Reduce method 
// function reverse(str) {
//   return str.split('').reduce((reversed, character) => {
//    return character + reversed;
//   }, '');
// }