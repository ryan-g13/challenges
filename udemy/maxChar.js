// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  // create an object or hashmap/ dictionary to store encounters of letters
  // if letter has not been encountered before add it
  // if letter is present in object/hashmap/dictionary increment count
  // return the highest count of character 
  // edge cases: what if there is a tie for count? are any chars not allowed/counted, what do we return if input is empty?
  const charMap = {};
  for (let char of str) {
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }
  let max = 0; 
  let maxKey = '';
  for (let key in charMap) {
    if (charMap[key] > max) {
      max = charMap[key];
      maxKey = key;
    }
  }
  return maxKey;
}

module.exports = maxChar;

// Alt Solution is using JS Maps (using get and set to check if already exists in the map).
