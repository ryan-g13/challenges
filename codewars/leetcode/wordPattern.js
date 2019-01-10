/*
Given a pattern and a string str, find if str follows the same pattern.

Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in str.

Example 1:

Input: pattern = "abba", str = "dog cat cat dog"
Output: true

Example 2:

Input:pattern = "abba", str = "dog cat cat fish"
Output: false

Example 3:

Input: pattern = "aaaa", str = "dog cat cat dog"
Output: false

Example 4:

Input: pattern = "abba", str = "dog dog dog dog"
Output: false
*/

//1st approach - create a hashmap as you encounter keys from the pattern the value would be added or verified as a collision occurs if they do not equal return false.
//2nd approach - 

// var wordPattern = function(pattern, str) {
//     const patternMap = new Map();
//     let splitStr = str.split(' ');
//     let splitPat = pattern.split('');
//     let ansFlag = true;
     
//     if(splitPat.length != splitStr.length) {
//       console.log(false);
//       return false;
//     }
//     splitStr.forEach((word,index) => {
//       if(!patternMap.has(splitPat[index])) {
//         if(patternMap.values().indexOf(word) === -1) {
//           patternMap.set(splitPat[index], word)
//         } else {
//           ansFlag = false;
//         }
//       } else if(patternMap.get(splitPat[index]) !== word) {
//         ansFlag = false;
//       }
//     })
//     console.log(ansFlag);
//     return ansFlag;
// };

var wordPattern = function(pattern, str) {
  const patternMap = {};
  let splitStr = str.split(' ');
  let splitPat = pattern.split('');
  let ansFlag = true;
   
  if(splitPat.length != splitStr.length) {
    console.log(false);
    return false;
  }
  splitStr.forEach((word,index) => {
    if(!patternMap[splitPat[index]]) {
      if(Object.values(patternMap).indexOf(word) === -1) {
        patternMap[splitPat[index]] = word;
      } else {
        ansFlag = false;
      }
    } else if(patternMap[splitPat[index]] !== word) {
      ansFlag = false;
    }
  })
  console.log(ansFlag);
  return ansFlag;
};

let pattern = "abba";
let str = "dog moo moo dog";

wordPattern(pattern, str);