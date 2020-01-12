const squareDigits = (num) => {
  let strNumArr = num.toString().split('');
  let squaredArr = [];
  strNumArr.forEach(ele => { squaredArr.push(Math.pow(parseInt(ele), 2) )})
  return parseInt(squaredArr.join(''));
}

squareDigits(987);