// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  // split string into words => array type
  // access first char of each word
  // change this to a capital 
  // join back to being a string 
  // return the joined string

  const splitStr = str.split(' ');
  for(var words of splitStr) {
    words = words[0].toUpperCase() + words.slice(1);
    console.log(words);
  }
  return splitStr.join(' ');
}

module.exports = capitalize;

// ALT my solution
// convert to ascii subtract x num to get cap # and then convert back to string join with rest of word. 

// Solution 1 
// function capitalize(str) {
//   const words = [];

//   for (let word of str.split(' ')) {
//     words.push(word[0].toUpperCase() + word.slice(1));
//   }

//   return words.join(' ');
// }

// Solution 2 
// function capitalize(str) {
//   let result = ''; //str[0].toUpperCase();
//   for(let i = 0; i < str.length; i++) {
//     if(str[i - 1] === ' ' || str[i - 1] === undefined) {
//       result += str[i].toUpperCase();
//     } else {
//       result += str[i];
//     }
//   }
//   return result;
// }
