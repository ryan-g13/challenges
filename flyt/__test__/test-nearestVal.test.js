var calcVal = require('../nearestVal');
// import { calcVal } from '../nearestVal';

describe('First set of tests', ()=> {
  test('Does the function exist in the file that we imported', () => {
    expect(typeof calcVal).toEqual('function');
  });
  test('Arguments', () => {
    // write a test to verify my arguments being passed in to the function;
    let testArr = [3, -20, 1, -8, 7, 4, 11, -3 ];
    let testTar = -20;
    expect(calcVal(testArr, testTar)).toEqual(-20);
  }); 
}); 