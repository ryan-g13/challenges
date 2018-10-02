/* Write Number in Expanded Form

You will be given a number and you will need to return it as a string in Expanded Form. For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'

NOTE: All numbers will be whole numbers greater than 0.
*/

function expandedForm(num) {
  let parsed = num.toString();
  console.log(parsed);
  let ansString = '';
  let length = parsed.length;
  for(let i = 0; i < length; i++) {
    if(i === length - 1 && parsed[i] !== '0') {
      ansString += parsed.charAt(i) + '0'.repeat(length - i - 1)
      } 
      else if (parsed[i] !== '0') {
        ansString += parsed.charAt(i) + '0'.repeat(length - i - 1) + ' + ';
      }
      console.log('forloop', ansString);
  }
  // catch to trim trailing + appended if all zeroes after first value. 
  if (ansString[ansString.length - 2] == '+') {
    ansString = ansString.substring(0 , ansString.length - 3);
    console.log('trimmed', ansString);
  }
  console.log('Answer', ansString);
  return ansString;
  
}


// Tests 
expandedForm(13579);
expandedForm(10009);
expandedForm(100000000);

