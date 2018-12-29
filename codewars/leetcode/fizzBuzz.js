/*
Write a program that outputs the string representation of numbers from 1 to n.

But for multiples of three it should output “Fizz” instead of the number and for the multiples of five output “Buzz”. For numbers which are multiples of both three and five output “FizzBuzz”.

Example:

n = 15,

Return:
[
    "1",
    "2",
    "Fizz",
    "4",
    "Buzz",
    "Fizz",
    "7",
    "8",
    "Fizz",
    "Buzz",
    "11",
    "Fizz",
    "13",
    "14",
    "FizzBuzz"
]
*/

var fizzBuzz = function(n) {
  let ansArr = [];
  let i = 1;
  while(i <= n) {
    if(i % 5 === 0 && i % 3 === 0) {
      ansArr.push('FizzBuzz');
    } else if(i % 5 === 0) {
      ansArr.push('Buzz');
    } else if (i % 3 === 0) {
      ansArr.push('Fizz');
    } else {
      ansArr.push(`${i}`);
    }
    i++;
  }  
  return ansArr;
};