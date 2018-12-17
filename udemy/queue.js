// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

class Queue {
  constructor() {
    this.container = []
  } 

  add(value) {
    this.container.unshift(value);
  }

  remove() {
    // should have check to see if empty
    return this.container.pop();
  }

}

module.exports = Queue;
