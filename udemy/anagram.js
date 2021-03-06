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

  for(let keys of cleanStrA) {
    if(keyMap[keys]) {
      keyMap[keys] += 1;
    } else {
      keyMap[keys] = 1;
    }
  }
  console.log(keyMap, 'adding values');
  for(let keys of cleanStrB) {
    if(keyMap[keys]) {
      keyMap[keys]--;
    } else if (keyMap[keys] < 0) {
      return false; 
    } else {
      console.log('hitting here');
      return false;
    }
  }
  console.log(keyMap, 'decrementing');
  let runSum = 0;
  for(keys in keyMap) {
    runSum += keyMap[keys];
  }
  return runSum === 0 ? true : false;
  // below returns NAN so needs work on reducing
  // return Object.keys(keyMap).reduce((acc, curr) => {
  //   console.log(parseInt(acc) + keyMap[curr]);
  //   acc + keyMap[curr];
  // }) === 0 ? true : false;  
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
// function anagrams(stringA, stringB) {
//   return cleanString(stringA) === cleanString(stringB);
// }

// function cleanString(string) {
//   return string.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
// }