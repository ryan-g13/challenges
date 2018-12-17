// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// next problem involving a queue
// --- Directions
// Implement a 'peek' method in this Queue class.
// Peek should return the last element (the next
// one to be returned) from the queue *without*
// removing it.
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

class Queue {
  constructor() {
    this.container = []
  } 

  add(value) {
    this.container.unshift(value);
  }

  peek() {
    return this.container[this.container.length - 1];
  }

  remove() {
    // should have check to see if empty
    return this.container.pop();
  }

}

module.exports = Queue;
