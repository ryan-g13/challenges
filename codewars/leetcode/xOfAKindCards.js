/*
In a deck of cards, each card has an integer written on it.

Return true if and only if you can choose X >= 2 such that it is possible to split the entire deck into 1 or more groups of cards, where:

    Each group has exactly X cards.
    All the cards in each group have the same integer.

 

Example 1:

Input: [1,2,3,4,4,3,2,1]
Output: true
Explanation: Possible partition [1,1],[2,2],[3,3],[4,4]

Example 2:

Input: [1,1,1,2,2,2,3,3]
Output: false
Explanation: No possible partition.

Example 3:

Input: [1]
Output: false
Explanation: No possible partition.

Example 4:

Input: [1,1]
Output: true
Explanation: Possible partition [1,1]

Example 5:

Input: [1,1,2,2,2,2]
Output: true
Explanation: Possible partition [1,1],[2,2],[2,2]


Note:

    1 <= deck.length <= 10000
    0 <= deck[i] < 10000
*/

//Algorithm - one is create a new array of arrays and construct it as you encounter values 
// or you can sort and build the array of arrays from there. 
// another method would be to create a hashmap of the keys and encounters and then only construct the array of arrays if it meets the guidelines provided. 

var hasGroupsSizeX = function(deck) {
  let answer = true;  
  if(deck.length < 2) { 
      answer = false;
      return answer;
    }
  const groupMap = new Map();
  deck.forEach(element => {
    if(groupMap.get(element)) {
      groupMap.set(element, groupMap.get(element) + 1);
    } else {
      groupMap.set(element, 1);
    }
  });
  // perform a check for the map to verify all conditions are met and then construct 2d array. 
  let groupSize = groupMap.get(deck[0]);
  console.log('group', groupSize);
  groupMap.forEach(value => {
    // if(value !== groupSize && value % groupSize !== 0) {
    //   answer = false;
    // }
    console.log(value, 'value')
    console.log(value >= 2 ? (value % 2 === 0 ? true : (value === groupSize) ? true : answer = false ) : answer = false); 
    value >= 2 ? (value % 2 === 0 ? true : (value === groupSize) ? true : answer = false ) : answer = false
  })
  console.log(answer);
  return answer;
};

hasGroupsSizeX([1,1,2,2,3,3,1,2,3]);

//var hasGroupsSizeX = function(deck) {
//   let counts = {};
//   for(let v of deck) {
//       counts[v] = counts[v] ? counts[v] + 1 : 1;
//   }
//   let count = counts[Object.keys(counts)[0]]; 
//   for (let key in counts) {
//       if(gcd(counts[key],count) < 2) {
//           return false;
//       }
//   }
  
//   function gcd(a, b) {
//       if ( ! b) {
//           return a;
//       }

//       return gcd(b, a % b);
//   };
  
//   return true;
// };
