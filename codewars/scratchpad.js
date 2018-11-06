/* 1.1 
Implement an algorithm to determine if a string has all unique characters. What if you
can not use additional data structures? 
*/
const example = 'money'
const badexample = 'abcfdef';

function checkUnique(str) {
  for(let i = 0; i < str.length; i++ ) {
    if(str.includes(str.charAt(i), i + 1)) {
      console.log(false);
      return false;
    }
  }
  return true;
}
// const checkUniqueArr = str => {

// }

// checkUnique(example);
// checkUnique(badexample);

/* 
Write a method to decide if two strings are anagrams or not.
*/
const ana1 = 'anna'
const ana2 = 'nand'

const isAnagram = (str1, str2) => {
  // compare lengths first check - return false if fails
  // iterate through first string using it as a key to remove letters from other string
  // return true if after reaching end of first string that the letters where all included and removed from second string aka second string is length 0; 
  if(str1.length !== str2.length) return false;
  str1.split('').forEach((letter, index) => {
    let temp = str2.indexOf(letter);
    if(temp === -1) { 
      return false; 
    }
    str2 = str2.substring(0,temp) + str2.substring(temp + 1); 
  });
  if(str2.length === 0) {
    return true;
  }
}
isAnagram(ana1, ana2);


// Singly linked list class 
function Node(next, value) {
  this.next = next;
  this.value = value;
};

// let Node = class Node {
//   constructor(next, value){
//     this.next = next;
//     this.value = value;
//   }
// }
function LinkedList() {
  this.head = null;
  this.tail = null;
};

LinkedList.prototype.addToHead = function(value) {
  const newNode = new Node(null, this.head);
  
};

LinkedList.prototype.addToTail = function(value) {
  const newNode = new Node(null, this.tail);
  if(this.tail) this.tail.next = newNode;
  else this.head = newNode;
  this.tail = newNode;
}

let list = new LinkedList();
list.addToTail(7);
list.addToTail(8);
list.addToTail(9);
console.log(list);

function fizzBuzz(arr) {
  arr.forEach((element, index) => {
    if( element % 15 === 0) {
      arr[index] = 'FizzBuzz';
    } else if (element % 5 === 0) {
      arr[index] = 'Buzz';
    } else if (element % 3 === 0) {
      arr[index] = 'Fizz';
    }
  })
  console.log(arr);
}

fizzBuzz([1, 3, 5, 15]);

// function findAnIndex(arr, index) {

// }

const findAnIndex = (arr, target) => {
  let flag = -1;
  arr.forEach((element, index) => {
    if(element === target) {
      flag = index;
      return index;
    }
  });
  if(flag != -1) {
    console.log(flag);
    return flag;
  } 
  console.log('reached', false);
}

const tempArr = [1, 2, 3, 4, 6];
findAnIndex(tempArr, 5);