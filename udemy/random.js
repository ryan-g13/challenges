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


This is just a simple shared plaintext pad, with no execution capabilities.

When you know what language you'd like to use for your interview,
simply choose it from the dropdown in the top bar.

You can also change the default language your pads are created with
in your account settings: https://coderpad.io/settings

Enjoy your interview!

rows = [
  {  name: "metric a", status: "green", category: "prod" },
  {  name: "metric b", status: "yellow", category: "optional" },
  {  name: "metric c", status: "red", category: "prod" },
  {  name: "metric d", status: "yellow", category: "optional" },
  ......
]

Output two tables, one for "prod" category, one for "optional" category.
Each table header/title should show percentage of metrics in red/yellow/green status for that category.  
// Javascript 

// 1. input array of objects
  // Output is a table which has percentage of each status per total
  // Production and Optional tables 
  
  // sort by category store in 2 sep arrays
  // perform calculations based on the status 
  // return calc fields and rows of tables 
  // group by color from status. (diff)
  
function metrics(arr) {
  const prodArr = [];
  const optArr = [];
  
  arr.forEach(obj => {
     if(obj.category === 'prod') {
      prodArr.push(obj);
     } 
    if(obj.category === 'optional') {
      optArr.push(obj); 
    }
  }
  /// Sorted by category arr 
  let prodArrSize = prodArr.length;
  let optArrSize = optArr.length;

  /// Hash map 3 keys status 
  const prodMap = new Map();
  const optMap = new Map();
  
  prodArr.forEach(element => {
    if(prodMap.get(element.status)) {
      prodMap.set(element, prodMap.get(element.status)++)
    } else {
      prodMap.set(element, 1); 
    }
  }
                  
  optArr.forEach(element => {
    if(optMap.get(element.status)) {
      optMap.set(element, optMap.get(element.status)++)
    } else {
      optMap.set(element, 1); 
    }
  }

  let prodMetrics = {
    'green': 0,
    'yellow': 0,
    'red': 0,
  }
  let optMetrics = {
   'green': 0,
    'yellow': 0,
    'red': 0, 
  }
  
  // Perform the math 
  prodMetrics.green = prodMap.get('green') / prodArrSize;
  prodMetrics.yellow = prodMap.get('yellow') / prodArrSize;
  prodMetrics.red = prodMap.get('red') / prodArrSize;

  optMetrics.green = optMap.get('green') / optArrSize;
  optMetrics.yellow = optMap.get('yellow') / optArrSize;
  optMetrics.red = optMap.get('red') / optArrSize;
  
  
  
  // return things
}


var groupBy = function(xs, key) {
  return xs.reduce(function(rv, x) {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
};



/// Table header 
  // ul  > li red or green or yellow with percents 
  // **** group by color scheme 

function createTable(arr, metrics) {
  document.createElement("div");
  document.createElement("table")
  
}

// All prod metrics which are not green 
SELECT * METRICS_STATUS WHERE STATUS != "green" AND CATEGORY = "prod"; 