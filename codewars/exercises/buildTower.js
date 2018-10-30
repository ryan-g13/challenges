/*
Build Tower

Build Tower by the following given argument:
number of floors (integer and always greater than 0).

Tower block is represented as *

    Python: return a list;
    JavaScript: returns an Array;
    C#: returns a string[];
    PHP: returns an array;
    C++: returns a vector<string>;
    Haskell: returns a [String];
    Ruby: returns an Array;

Have fun!

for example, a tower of 3 floors looks like below

[
  '  *  ', 
  ' *** ', 
  '*****'
]

and a tower of 6 floors looks like below

[
  '     *     ', 
  '    ***    ', 
  '   *****   ', 
  '  *******  ', 
  ' ********* ', 
  '***********'
]

Go challenge Build Tower Advanced once you have finished this :)
*/

// pattern is # of rows * 2 - 1 for the width of the rows. 
function towerBuilder(nFloors) {
  let ansArr = [];
  const width = nFloors * 2 - 1;
  for(let i = 0; i < nFloors; i++) { 
    let tempRow = '';
    tempRow += ' '.repeat(nFloors - i - 1);
    tempRow += '*'.repeat(1 + 2 * i);
    tempRow += ' '.repeat(nFloors - i - 1);
    // console.log(tempRow);
    ansArr.push(tempRow);
  }
  // console.log(ansArr);
  return ansArr;
}

towerBuilder(7);