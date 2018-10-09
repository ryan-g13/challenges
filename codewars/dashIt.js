/*
Given a number, return a string with dash'-'marks before and after each odd integer, but do not begin or end the string with a dash mark.

Ex:

dashatize(274) -> '2-7-4'
dashatize(6815) -> '68-1-5'
*/

function dashatize(num) {
  num = num.toString();
  if(num[0] == '-') {
    num = num.substring(1);
    console.log('hai');
  }
  if(num == 0) { 
    console.log('im a zero');
    return '0'; 
  }
  if(num == 'NaN') { return 'NaN';}

  for(let i = 0; i < num.length; i++) {
    if(num[i] % 2 == 1 && i != num.length - 1) {
      num = num.slice(0, i + 1) + '-' + num.slice(i + 1);
    }
    else if(num[i] % 2 == 1) {
      num = num.slice(0, i) + '-' + num.slice(i);
      i++;
      if (i != num.length - 1) {
        num = num.slice(0, i + 1) + '-' + num.slice(i + 1);
        i++;
      }
    }
    console.log(num);
  }
  console.log(num);
  return num;
};

dashatize(78581);