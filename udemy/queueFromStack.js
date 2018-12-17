// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
// const q = new Queue();
// q.add(1);
// q.add(2);
// q.peek();  // returns 1
// q.remove(); // returns 1
// q.remove(); // returns 2

import Stack from './stack';

class Queue {
  constructor() {
    this.stackA = new Stack();
    this.stackB = new Stack();
  }

  add(value) {
    this.stackA.push(value);
  }

  peek() {
    while(this.stackA.peek()) {
      this.stackB.push(this.stackA.pop());
    }
    const visited = this.stackB.peek();
    while(this.stackB.peek()) {
      this.stackA.push(this.stackB.pop());
    }
    return visited;
  }

  remove() {
    while(this.stackA.peek()) {
      this.stackB.push(this.stackA.pop());
    }
    const removed = this.stackB.pop();
    while(this.stackB.peek()) {
      this.stackA.push(this.stackB.pop());
    }
    return removed;
  }
}

module.exports = Queue;