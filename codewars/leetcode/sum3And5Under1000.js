sum3And5 = () => {
  let sum = 0;
  for(let i = 3; i < 1000; i++) {
    if(i % 3 === 0 || i % 5 === 0 ) {
      sum += i;
    }
  }
  return sum;
} 

/*
sum = 233168
*/