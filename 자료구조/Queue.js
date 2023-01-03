// 배열을 이용한 큐
// class Queue {
//   constructor() {
//     this.arr = [];
//   }

//   enQueue(item) {
//     this.arr.push(item);
//   }

//   deQueue() {
//     return this.arr.shift();
//   }

//   peek() {
//     return this.arr[0];
//   }

//   getSize() {
//     return this.arr.length;
//   }

//   isEmpty() {
//     return this.getSize() === 0;
//   }
// }

// const queue = new Queue();
// queue.enqueue(3);
// console.log(queue.peek());

// queue.dequeue();
// console.log(queue.peek());

// ----------------------------------------------------------------------------

class Queue {
  constructor() {
    this.arr = {};
    this.head = 0;
    this.tail = 0;
  }

  enQueue(item) {
    this.arr[this.tail] = item;
    this.tail++;
  }

  deQueue() {
    let removed = this.arr[this.head];
    delete this.arr[this.head];
    this.head++;
    return removed;
  }

  peek() {
    return this.arr[this.head];
  }

  getSize() {
    return Object.keys(this.arr).length;
  }

  isEmpty() {
    return this.getSize() === 0;
  }
}

const q = new Queue();
q.enQueue(3); // 3 추가
console.log(q.peek()); // 3

q.enQueue(4); // 4추가
console.log(q.peek()); // 3   peak는 head값을 확인한다.
q.deQueue(); // 처음값인 3제거
console.log(q.peek()); // 4

q.enQueue(1); // 1추가
q.deQueue(); // 처음값인 4제거

console.log(q.isEmpty()); //false
q.deQueue(); // 처음값인 1제거

console.log(q.isEmpty()); //true
