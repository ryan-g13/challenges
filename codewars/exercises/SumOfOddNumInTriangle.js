const rowSumOddNumbers = (n) => {
  // pattern for starting number is iterate up to row adding row - 1  * 2
  // each row is row # in length
  if (n < 1) return 0;
  if (n === 1) return 1;
  let startingNum = 1;
  for (let i = 1; i <= n; i++) {
    startingNum += (i - 1) * 2;
  }
  let rowSum = startingNum;
  for (let j = 1; j < n; j++) {
    rowSum += startingNum + (j * 2);
  }
  console.log(rowSum)
  return rowSum;
}

rowSumOddNumbers(1);
rowSumOddNumbers(42);
rowSumOddNumbers(999);