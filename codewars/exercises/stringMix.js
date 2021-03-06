/* 
Given two strings s1 and s2, we want to visualize how different the two strings are. We will only take into account the lowercase letters (a to z). First let us count the frequency of each lowercase letters in s1 and s2.

s1 = "A aaaa bb c"

s2 = "& aaa bbb c d"

s1 has 4 'a', 2 'b', 1 'c'

s2 has 3 'a', 3 'b', 1 'c', 1 'd'

So the maximum for 'a' in s1 and s2 is 4 from s1; the maximum for 'b' is 3 from s2. In the following we will not consider letters when the maximum of their occurrences is less than or equal to 1.

We can resume the differences between s1 and s2 in the following string: "1:aaaa/2:bbb" where 1 in 1:aaaa stands for string s1 and aaaa because the maximum for a is 4. In the same manner 2:bbb stands for string s2 and bbb because the maximum for b is 3.

The task is to produce a string in which each lowercase letters of s1 or s2 appears as many times as its maximum if this maximum is strictly greater than 1; these letters will be prefixed by the number of the string where they appear with their maximum value and :. If the maximum is in s1 as well as in s2 the prefix is =:.

In the result, substrings (a substring is for example 2:nnnnn or 1:hhh; it contains the prefix) will be in decreasing order of their length and when they have the same length sorted in ascending lexicographic order (letters and digits - more precisely sorted by codepoint); the different groups will be separated by '/'. See examples and "Example Tests".

Hopefully other examples can make this clearer.

s1 = "my&friend&Paul has heavy hats! &"
s2 = "my friend John has many many friends &"
mix(s1, s2) --> "2:nnnnn/1:aaaa/1:hhh/2:mmm/2:yyy/2:dd/2:ff/2:ii/2:rr/=:ee/=:ss"

s1 = "mmmmm m nnnnn y&friend&Paul has heavy hats! &"
s2 = "my frie n d Joh n has ma n y ma n y frie n ds n&"
mix(s1, s2) --> "1:mmmmmm/=:nnnnnn/1:aaaa/1:hhh/2:yyy/2:dd/2:ff/2:ii/2:rr/=:ee/=:ss"

s1="Are the kids at home? aaaaa fffff"
s2="Yes they are here! aaaaa fffff"
mix(s1, s2) --> "=:aaaaaa/2:eeeee/=:fffff/1:tt/2:rr/=:hh"
*/

function mix(s1, s2) {
  // ignore caps 
  // create a hashmap of all lowercase chars in string
  // ignore single occurances 
  // return the max number from either hashmap of a single char prefix with the number from which string it came from. if equal prefix with =: sign 
  const s1Map = new Map();
  const s2Map = new Map();

  // use regex to trim out caps and symbols/spaces
  s1 = s1.replace(/[^a-z]/g, '');
  s2 = s2.replace(/[^a-z]/g, '');


  fillMap = (list, map) => {
    let arr = list.split('');
    arr.forEach(element => {
      if(map.get(element)) {
        map.set(element, map.get(element) + 1);
      } else {
        map.set(element, 1);
      }
    });
    console.log(map);
  }

  fillMap(s1, s1Map);
  fillMap(s2, s2Map);

  // iterate through both arrays looking for max value of single chars in both
  let ansArr = []; 
  for(let [key, value] of s1Map) {
    // compare key in s1 to s2 which ever is max add to array. 
    if(s2Map.get(key) > value && value > 1) {
      ansArr.push(`2:${key.repeat(s2Map.get(key))}`);
      s2Map.set(key, 0);
    } else if(s2Map.get(key) < value && value > 1) {
      ansArr.push(`1:${key.repeat(value)}`);
      s2Map.set(key, 0);
    } else if(s2Map.get(key) === value && value > 1) {
      ansArr.push(`=:${key.repeat(value)}`);
      s2Map.set(key, 0);
    }
  }  
  console.log(ansArr, 'after s1 for loop');
  console.log(s2Map, 'after for loop')
  for(let [key, value] of s2Map) {
    if(s1Map.get(key) < value && value > 1) {
      ansArr.push(`2:${key.repeat(value)}`);
    }
  }
  console.log(ansArr); 

  // custom sort feature
  function custSort(a,b){
    return b.length - a.length;
    }

  
  // sort by index length and if there is no matching value append a / to the end of the string
  console.log(ansArr.sort(custSort));
  let sortedArr = ansArr.sort(custSort);
  let retString = ''
  for(let i = 0; i < sortedArr.length - 1; i++) {
    if(sortedArr[i].length > sortedArr[i + 1].length) {
      retString = retString + sortedArr[i] + '/'; 
    } else {
      retString += sortedArr[i];
    }
  }
  retString += sortedArr[sortedArr.length - 1];
  console.log(retString);
  return retString;
}

// let s1 = "A aaaa bb c"
let s1 = "mmmmm m nnnnn y&friend&Paul has heavy hats! &"
let s2 = "my frie n d Joh n has ma n y ma n y frie n ds n&"
// let s2 = "& aaa bbb c d"
mix(s1, s2);