// import main from '../main';
var main = require('../main');

describe('This is a basic testing suite to ensure my js file is running correctly', ()=> {
  document.body.innerHTML =
    '<div id="grid-container">' +
    '</div>';
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
  
})