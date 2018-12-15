// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib(n) {
  // assuming 0 and 1 first two terms are present 
  // iterate until you reach the nth term summing and creating new terms as you iterate. 
  // create array [0, 1];
  // for every value up to n sum the two previous terms. 
  const seqArr = [0, 1];
  for(let i = 2; i <= n; i++) {
    seqArr.push((seqArr[i - 1] + seqArr[i - 2]));
  }
  return seqArr[seqArr.length - 1];
}

module.exports = fib;

// solution iterative
// function fib(n) {
//   const result = [0, 1];
//   for(let i = 2; i <= n; i++) {
//     const a = result[i - 1];
//     const b = result[i - 2];
//     result.push(a + b);
//   }
//   return result[n];
// }

// recursive solution
// function fib(n, arg1, arg2, step = 2) {
//   if( n < 2 ) {
//     return n > 0 ? arg2 : arg1;
//   }
//   if(step > n) {
//     return arg2;
//   }
//   let temp = arg1;
//   arg1 = arg2;
//   arg2 = temp + arg2;
//   console.log('arg2: ', arg2, step);
//   step++;
//   fib(n, arg1, arg2, step);
// }

// fib(10, 0, 1);

// Solution 2 recursive solution 
// function fib(n) {
//   if(n < 2 ) {
//     return n;
//   }
//   return fib(n - 1) + fib(n - 2);
// }

// Memoized function to reduce the number of function calls 
function slowFib(n) {
  if(n < 2 ) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
}

function memoizeFn(fn) {
  const cache = {

  };
  return function(...args) {
    if (cache[args]) {
      return cache[args];
    }
    const result = fn.apply(this, args)
    cache[args] = result;

    return result;
  }
}

const fib = memoizeFn(slowFib);