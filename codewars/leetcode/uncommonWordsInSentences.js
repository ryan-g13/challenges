/*
We are given two sentences A and B.  (A sentence is a string of space separated words.  Each word consists only of lowercase letters.)

A word is uncommon if it appears exactly once in one of the sentences, and does not appear in the other sentence.

Return a list of all uncommon words. 

You may return the list in any order.

 

Example 1:

Input: A = "this apple is sweet", B = "this apple is sour"
Output: ["sweet","sour"]

Example 2:

Input: A = "apple apple", B = "banana"
Output: ["banana"]

 

Note:

    0 <= A.length <= 200
    0 <= B.length <= 200
    A and B both contain only spaces and lowercase letters.

*/

// Possible solutions iterate through first sentence clearing all encounters from second sentence. return remaining words from both after deduping second.
// create two hashmaps only access key value pairs that have value 1 and compare key to other sentence map to ensure no collisions.  
var uncommonFromSentences = function(A, B) {
  const aMap = new Map();
  const bMap = new Map();

  let aArr = A.split(" ");
  let bArr = B.split(" ");

  constructMap = (arr, map) => {
    arr.forEach(word => {
      if(map.get(word)) {
        map.set(word, map.get(word) + 1);
      } else {
        map.set(word, 1);
      }
    })
  }
  constructMap(aArr, aMap);
  constructMap(bArr, bMap);

  let uncommonArr = [];

  // Access keys array and check if any are more than one if they are 1 and not in the other push word to uncommon arr
  combForUncommon = (target, alt) => {
    for(let [key, value] of target) {
      if(value === 1 && !alt.has(key)) {
        uncommonArr.push(key);
      }
    }
  }
  combForUncommon(aMap, bMap);
  combForUncommon(bMap, aMap);
  
  console.log(uncommonArr);
  return uncommonArr;
};

uncommonFromSentences("Shruti is a cutie", "Moo is the cutie");