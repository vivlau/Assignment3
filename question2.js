/*
Question 2: Stacks & Queues
Implement a Stack and a Queue data structure in Javascript.

Explain the difference between a stack and a queue.
Write a Javascript constructor called Stack and another Javascript class called Queue.
Each should have a prototype method, add, that adds an element to the stack or queue and returns it.
Each should have a prototype method, remove, that removes an element from the stack or queue and returns it.
Make sure that each constructor/class behaves properly as per definitions of stacks and queues.
*/

// A stack is where an element is first in but last out
// A queue is where an element is first in and first out

const Stack = function(array) {
  this.array = array;
};

Stack.prototype.add = function(element) {
  array.push(element);
};

Stack.prototype.remove = function() {
  array.pop();
};

const Queue = function(array) {
  this.array = array;
};

Queue.prototype.add = function(element) {
  array.push(element);
};

Queue.prototype.remove = function() {
  array.shift();
};

// TEST
array = [1,2,3];
const aStack = new Stack(array);
aStack.add(4);
console.log(aStack);
aStack.remove();
console.log(aStack);

const aQueue = new Queue(array);
aQueue.add(4);
console.log(aStack);
aQueue.remove();
console.log(aStack);
