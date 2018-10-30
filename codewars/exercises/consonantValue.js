/*
A consonant is any letter of the alphabet except a, e, i ,o, u. The consonant substrings in the word "zodiacs" are z, d, cs. Assuming a = 1, b = 2 ... z = 26, the values of these substrings are 26 ,4, 22 because z = 26,d = 4,cs=3+19=22. The maximum value of these substrings is 26. Therefore, solve("zodiacs") = 26.

Given a lowercase string that has alphabetic characters only and no spaces, return the highest value of consonant substrings.

Good luck!
*/
// 'a' = 97 so need to subtract 96 from ascii code to get valuation
function solve(s) {
  let splitArr = s.split(/[aeiou]/g);
  let ansArr = [];
  let consSum = [];
  console.log(splitArr);
  splitArr.forEach(element => {
    ansArr.push(element.trim());
  });

  for (let i = 0; i < ansArr.length; i++) {
    let runSum = 0;
    for (let j = 0; j < ansArr[i].length; j++) {
      runSum += ansArr[i].charCodeAt(j) - 96;
    }
    consSum.push(runSum);
  }
  console.log(consSum);
  console.log(ansArr);
  let max = consSum.reduce(function(a, b) {
    return Math.max(a, b);
  });
  console.log(max);
  return max;
};

solve('iamastring');