// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  // create object to store key value pairs of occurences of letters
  // convert everything to lowercase
  // iterate through first string to populate object
  // iterate through second string decrimenting on collision
  // return true if all keys' values are 0 otherwise return false

  const keyMap = {};
  let cleanStrA = stringA.replace(/[^\w]/g, '').toLowerCase();
  let cleanStrB = stringB.replace(/[^\w]/g, '').toLowerCase();
  console.log(cleanStrA, cleanStrB);
  if(cleanStrA.length !== cleanStrB.length) { return false }

  for(let keys in stringA) {
    if(keyMap.keys) {
      keyMap[keys]++;
    } else {
      keyMap[keys] = 1;
    }
  }
  for(let keys in stringB) {
    if(keyMap.keys) {
      keyMap[keys]--;
    } else {
      console.log('hitting here');
      return false;
    }
  }

  return Object.keys(keyMap).reduce((acc, curr) => {
    console.log(acc + curr);
    acc + curr;
  }) === 0 ? true : false;  
}

module.exports = anagrams;

// Solution 1
// function anagrams(stringA, stringB) {
//   const aCMap = buildCharMap(stringA);
//   const bCMap = buildCharMap(stringB);

//   if(Object.keys(aCMap).length !== Object.keys(bCMap).length) {
//     return false;
//   }

//   for(let key in aCMap) {
//     if(aCMap[key] !== bCMap[key]) {
//       return false;
//     }
//   }
//   return true;
// }

// helper function to create a key map for the 2 char maps
// function buildCharMap(string) {
//   const charMap = {};

//   for (let keys of string.replace(/[^\w]/g, '').toLowerCase()) {
//     charMap[keys] = charMap[keys]++ || 1;
//   }
//   return charMap;
// }

// Solution 2 
function anagrams(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB);
}

function cleanString(string) {
  return string.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}
