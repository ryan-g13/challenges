/* ============================================================================================
  Function call to dynamically create the required grid elements
// ============================================================================================
*/
  function addElement() {
    let targetDiv = document.querySelector("#grid-container");
    for(let i = 1; i <= 64; i++) {
        targetDiv.innerHTML = targetDiv.innerHTML + `<div class=card draggable="true">${i}</div>`;
      }
 }

addElement();

// Global Declarations
var dragSrcEl = null;
var items = document.querySelectorAll('#grid-container .card');

/* ============================================================================================
// Event handling functions - In order of occurance with user flow.
// ============================================================================================
*/
function handleDragStart(event) {
  this.style.opacity = '0.25';
  this.classList.add('ghost');

  dragSrcEl = this;
  
  event.dataTransfer.effectAllowed = 'move';
  event.dataTransfer.setData('text/html', this.innerHTML);
}

function handleDragEnter(event) {
  this.classList.add('over');
}

function handleDragOver(event) {
  if(event.preventDefault) {
    event.preventDefault(); // allows for dropping 
  }
  event.dataTransfer.dropEffect = 'move';
  
  return false;
}

function handleDragExit(event) {
  this.classList.remove('over');
}

function handleDragDrop(event) {
  if(event.stopPropagation) {
    event.stopPropagation(); // prevents further capturing and bubbling of this event.
  }
  // checking if it is dropping on the same starting block
  if(dragSrcEl != this) {
    dragSrcEl.innerHTML = this.innerHTML;
    this.innerHTML = event.dataTransfer.getData('text/html');
  }
  return false;
}

function handleDragCleanup(event) {
  items.forEach(item => {
    item.classList.remove('over');
    item.classList.remove('ghost');
    item.style.opacity = '1.0';
  });
}

// Attaching event listners to the appropriate dynamically created elements. 
items.forEach((item) => {
  item.addEventListener('dragstart', handleDragStart, false);
  item.addEventListener('dragenter', handleDragEnter, false);
  item.addEventListener('dragover', handleDragOver, false);
  item.addEventListener('dragleave', handleDragExit, false);
  item.addEventListener('drop', handleDragDrop, false);
  item.addEventListener('dragend', handleDragCleanup, false);
});

// Exporting functions for testing purposes. 
// module.exports.addElement = addElement;
module.exports.handleDragStart = handleDragStart;
module.exports.handleDragOver = handleDragOver;
module.exports.handleDragExit = handleDragExit;
module.exports.handleDragEnter = handleDragEnter;
module.exports.handleDragDrop = handleDragDrop;
module.exports.handleDragCleanup = handleDragCleanup;
