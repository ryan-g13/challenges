// // reduce - returns single value 
// [0, 1, 2, 3, 4].reduce( (accumulator, currentValue, currentIndex, array) => accumulator + currentValue );

// // for arrays of objects: 
// var initialValue = 0;
// var sum = [{x: 1}, {x:2}, {x:3}].reduce(function (accumulator, currentValue) {
//     return accumulator + currentValue.x;
// },initialValue)

// // MAP - creates a new array with the results of calling a provided function on every element in the calling array.
// var kvArray = [{key: 1, value: 10}, 
//   {key: 2, value: 20}, 
//   {key: 3, value: 30}];

// var reformattedArray = kvArray.map(obj =>{ 
// var rObj = {};
// rObj[obj.key] = obj.value;
// return rObj;
// });
// // reformattedArray is now [{1: 10}, {2: 20}, {3: 30}],

// // FILTER creates a new array with all elements that pass the test implemented by the provided function.
// const fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];

// /**
//  * Array filters items based on search criteria (query)
//  */
// const filterItems = (query) => {
//   return fruits.filter((el) =>
//     el.toLowerCase().indexOf(query.toLowerCase()) > -1
//   );
// }

let arr = [{name: 'i', value: 'this'}, , {name: 'fucking', value: 'close'}, 0];
console.log(arr);
arr = arr.filter(el => { return el === 0 || el });
console.log('filtered', arr);

