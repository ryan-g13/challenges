// New method: Convert sub string into an array and slice first encounter with letter if matches the current index of the string.  
var findAnagrams = function(s, p) {};

// First iteration solves for 2 length sub strings however does not solve for longer substrings. 
var findAnagramsL2 = function(s, p) {
    console.log(p);
    console.log(s);
    let ansIndexArr = [];
    for(let i = 0; i < s.length; i++) {
      let count = 0;
      if(s[i] === p[0]) {
        while(count < p.length && p[count] === s[i + count]) {
          count++;
        }
        count === p.length ? ansIndexArr.push(i) : null;
      }
      if(s[i] === p[p.length - 1]) {
        count = 0;
        while(count < p.length && p[p.length - 1 - count] === s[i + count]) {
          count++;
        }
        count === p.length ? ansIndexArr.push(i) : null;
      }
    };
    console.log(ansIndexArr);
};

let string = 'abab';
let secondString = 'cbaebabacd'
let subString = 'ab';
let secondSubString = 'abc'

findAnagramsL2(string, subString);