class Stack {
  constructor() {
    this.arr = [];
  }

  push(value) {
    this.arr.push(value);
  }

  pop() {
    if (this.arr.length <= 0) return null;
    return this.arr.pop();
  }

  peek() {
    return this.arr[this.arr.length - 1];
  }

  clear() {
    return (this.arr = []);
  }

  empty() {
    return this.arr.length > 0 ? false : true;
  }
}

const stack = new Stack();
stack.push(1);
console.log(stack.pop()); // 1

stack.push(2);
console.log(stack.peek()); // 2

stack.push(3);
stack.push(4);
stack.push(5);
stack.clear();
console.log(stack.pop()); // null

stack.push(3);
console.log(stack.empty()); // false
stack.clear();
console.log(stack.empty()); //true
