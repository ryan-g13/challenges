var obj = require('../nearestVal');

describe('First set of tests', ()=> {
  test('Is it a object', () => {
    expect(typeof obj).toEqual('object');
  });
  test('Arguments', () => {
    // write a test to verify my arguments being passed in to the function;
    let testArr = [3, -20, 1, -8, 7, 4, 11, -3 ];
    let testTar = -20;
    expect(nearestVal(testArr, testTar)).toEqual(-20);
  }); 


}); 