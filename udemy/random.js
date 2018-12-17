class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null; 
  }

  append(value) {
    const node = new Node(value);

    if(!this.head) {
      this.head = node;
      return this;
    }

    let currentNode = this.head;
    while(currentNode.next !== null) {
      currentNode = currentNode.next;
    }

    currentNode.next = node;
    return this;
  }

  insertBefore(value, newValue) {
    if(!this.head) {
      throw new Error('LinkedList is empty -- cannot prepend');
    }
    if(this.head.value === value) {
      const node = new Node(newValue);
      const temp = this.head;
      this.head = node;
      this.head.next = temp;
      return this;
    }

    const currentNode = this.head;
    const node = new Node(newValue);
    while(currentNode.next) {
      if(currentNode.next.value === value) {
      const temp = currentNode.next;
      currentNode.next = node;
      currentNode.next.next = temp;
      break;
      }
    }
    if (currentNode.value !== value) {
      throw new Error('Value not included in LinkedList please enter a valid value');
      return this;
    }
  }

}


//// TESTING AREA FOR LL 
let node1 = 1;
let node2 = 2;
let node3 = 3;
let node4 = 4;

let ll = new LinkedList();

ll.append(node1);
ll.append(1);
ll.append(2);
ll.append(3);
ll.insertBefore(1, 4);

console.log(ll);
