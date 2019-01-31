// import main from '../main';
var main = require('../main');
var html = require('fs').readFileSync('../index.html').toString();


describe('This is a basic testing suite to ensure my js file is running correctly', ()=> {
  jest
  .dontMock('fs');
  document.documentElement.innerHTML = html;
  test('test to see if the function I wrote exists in the file', ()=> {
    expect(typeof main.handleDragStart).toEqual('function');
    expect(typeof main.handleDragEnter).toEqual('function');
    expect(typeof main.handleDragExit).toEqual('function');
    expect(typeof main.handleDragCleanup).toEqual('function');
    expect(typeof main.handleDragOver).toEqual('function');
    expect(typeof main.handleDragDrop).toEqual('function');
    // Currently add element function breaks due to appending innnerHTML 
    // console.log(addElement);
  });
  test('0', () => {
    // expect(document.getElementById("#grid-container").hasChildNodes()).toBeTruthy();
    console.log(document.documentElement.innerHTML);
  });
})