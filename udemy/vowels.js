// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  // count interactions with vowels.
  // return the count of vowels. 
  let count = 0;
  let vowelObj = {
    'a': 'a',
    'e': 'e',
    'i': 'i',
    'o': 'o',
    'u': 'u'
  }
  str.toLowerCase().split('').forEach(letter => {
    if(vowelsObj[letter]) {
      count++
    }
  });
  return count;
}

// regex solution -
// const vowels = (str) => {
//   return str.match(/[aeiou]/gi) ? str.match(/[aeiou]/gi).length : 0;
// }

module.exports = vowels;

// solution: 
// function vowels(str) {
//   let count = 0;
//   const vowelstr = 'aeiou'; // || ['a', 'e', 'i', 'o', 'u']

//   for(let vowel of str.toLowerCase()) {
//     if(vowelstr.includes(vowel)) {
//       count++;
//     }
//   }
//   return count;
// }