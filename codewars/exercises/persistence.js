/* Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

For example:

 persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4
                       // and 4 has only one digit

 persistence(999) === 4 // because 9*9*9 = 729, 7*2*9 = 126,
                        // 1*2*6 = 12, and finally 1*2 = 2

 persistence(4) === 0 // because 4 is already a one-digit number

*/

let count = 0;
function persistence(num) {
  let steps = 0;
  if(num < 10) {
    console.log('num length is 1')
    return steps; 
  }
  steps = count;
  let product = 1;
  let calc = num.toString().split('');
  console.log(calc);
  calc.forEach(element => {
    product *= parseInt(element);
  });
  steps++;
  // console.log( 'incremented', steps)
  // console.log(product);
  if(product > 9) {
    count++;
    // console.log('I am function calls', count);
    persistence(product);
  } else {
    count = 0;
    console.log('ans steps', steps);
    return steps;
  }
}

persistence(89577);
persistence(7156);

function persistence(num) {
  var times = 0;
  
  num = num.toString();
  
  while (num.length > 1) {
    times++;
    num = num.split('').map(Number).reduce((a, b) => a * b).toString();
  }
  
  return times;
}