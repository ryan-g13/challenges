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
  for(let i = 0; i < n; i++) {
    if(i < 2) {
      console.log(seqArr[i]);
      return seqArr[i];
    } else {
      seqArr.push((seqArr[i - 1] + seqArr[i - 2]));
    }
  }
  return seqArr.pop();
}

module.exports = fib;
