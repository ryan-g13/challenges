/* 
You are given a secret message you need to decipher. Here are the things you need to know to decipher it:

For each word:

    the second and the last letter is switched (e.g. Hello becomes Holle)
    the first letter is replaced by its character code (e.g. H becomes 72)

Note: there are no special characters used, only letters and spaces
Examples

decipherThis('72olle 103doo 100ya') // 'Hello good day'
decipherThis('82yade 115te 103o')   // 'Ready set go'
*/
function decipherThis(str) {
  //No
  // Algo 1. break into words, 2. access first 3 nums in word to convert to letter, 3 switch 2nd and last letters in string. 4. return / print deciphered message 
  let parsedWords = str.split(' ');
  let answer = [];
  console.log(parsedWords);
  parsedWords.forEach(element => {
    console.log('beg', element);
    let letterConvert = '';
    let temp = element[element.length - 1];
    let tempSwap = '';
    if(element.slice(0,3) == parseInt(element.slice(0, 3))) {
      letterConvert = String.fromCharCode(element.slice(0, 3));
      element = letterConvert + element.substring(3);
    } else {
      letterConvert = String.fromCharCode(element.slice(0, 2));
      element = letterConvert + element.substring(2);
    }
    if(element.length > 1) {
      let ansWord = '';
      tempSwap = element[1];
      ansWord = element.slice(0,1) + temp + element.slice(2, element.length - 1) + tempSwap;
      console.log(ansWord);
      answer.push(ansWord);
    }
    else {
      answer.push(element);
    }
  })
    console.log(answer.join(' '));
    return answer.join(' ');
  }; 

decipherThis('65 72olle 103doo 100ya');
