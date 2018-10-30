/*
The main idea is to count all the occuring characters(UTF-8) in string. If you have string like this aba then the result should be { 'a': 2, 'b': 1 }

What if the string is empty ? Then the result should be empty object literal { }

For C#: Use a Dictionary<char, int> for this kata!
*/

function count(string) {  
  if(string.length == 0) {
    console.log('null length');
    return {};
  }
  let ansObj = {};
  let strArr= string.split('');
  strArr.forEach(element => {
    // console.log(element);
    if(ansObj[element]) {
      ansObj[element]++;
    } else {
      ansObj[element] = 1;
    }
  });
  console.log(ansObj);
  return ansObj;
}

count('');
count('U and I are string values');