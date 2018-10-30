/*
  Return the number (count) of vowels in the given string.

  We will consider a, e, i, o, and u as vowels for this Kata.

  The input string will only consist of lower case letters and/or spaces.
*/

// Regex
function getCount(str) {
  let vowelsCount = 0;
  let regex = /['AEIOUaeiou']/g;
  // let vowels = regex.exec(str);
  let vowels = str.match(regex).length;
  console.log(vowels);
  return vowelsCount;
}

// Traditional
function getCount(str) {
  var vowelsCount = 0;
  
  for(let i = 0; i < str.length; i++){
    if(str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u'){
      vowelsCount++;
    }
  }
  console.log(vowelsCount);
  return vowelsCount;
}

// Test Case should return 7. 
getCount('baaaecu ae');