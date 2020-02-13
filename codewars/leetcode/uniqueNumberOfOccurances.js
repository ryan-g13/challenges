/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
  let obj = {};
  for(let i = 0; i < arr.length; i++) {
      if (obj[arr[i]]) {
          obj[arr[i]]++;
      } else {
          obj[arr[i]] = 1;
      }
  }
  let array = Object.keys(obj);
  for(let i = 0; i < array.length; i++) {
      for(let j = i + 1; j < array.length; j++) {
          if (obj[array[i]] === obj[array[j]]) {
              return false;
          }
      }
  }
  return true;
};