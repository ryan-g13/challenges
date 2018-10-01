const testArray = [1, 2, 3, 4];

const testFunction = (x) => {
  return x * x;
}
// Functionally recreate the .ForEach method for arrays using vanilla javascript
// forEach going to be a function that takes the array and a callback function that will act on each index - will mutate the incoming array.
const replacedForEach = (array, fn) => {
  for(let i = 0; i < array.length; i++) {
    // console.log(array[i]);
    array[i] = fn(array[i]);
  }
  return array;
}


// replacedForEach(testArray, console.log);
// replacedForEach(testArray, testFunction);

// Functionally recreate the .Map method for arrays using vanilla javascript
const replacedMap = (array, fn) => {
  let ansArr = []
  for(let i = 0; i < array.length; i++) {
    ansArr[i] = fn(array[i]);
  }
  return ansArr;
}

console.log(replacedMap(testArray, testFunction));
console.log('Non Mutated', testArray);

// Functionally recreate the .Filter method for arrays using vanilla javascript

// Functionally recreate the .Reduce method for arrays using vanilla javascript

const replacedReduce = (array)