// class Node {
//   constructor(data) {
//     this.data = data;
//     this.prev = null;
//     this.next = null;
//   }
// }

// class Dequeue {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//     this.size = 0;
//   }

//   init() {
//     this.head = null;
//     this.tail = null;
//     this.size = 0;
//   }

//   isEmpty() {
//     return this.size == 0;
//   }

//   add_front(item) {
//     //if list is empty
//     if (this.isEmpty()) {
//       this.head = new Node(item);
//       this.tail = this.head;
//     } else {
//       let newNode = new Node(item);
//       newNode.next = this.head;
//       this.head.prev = newNode;
//       this.head = newNode;
//     }
//     this.size++;
//   }

//   add_rear(item) {
//     //if list is empty
//     if (this.isEmpty()) {
//       this.tail = new Node(item);
//       this.head = this.tail;
//     } else {
//       let newNode = new Node(item);
//       newNode.prev = this.tail;
//       this.tail.next = newNode;
//       this.tail = newNode;
//     }
//     this.size++;
//   }

//   delete_front() {
//     if (this.isEmpty()) return null;

//     let data = this.head.data;

//     //if head(=tail) is target
//     if (this.head == this.tail) {
//       this.head = null;
//       this.tail = null;
//     } else {
//       this.head = this.head.next;
//       this.head.prev = null;
//     }
//     this.size--;
//     return data;
//   }

//   delete_rear() {
//     if (this.isEmpty()) return null;

//     let data = this.tail.data;

//     //if head(=tail) is target
//     if (this.head == this.tail) {
//       this.head = null;
//       this.tail = null;
//     } else {
//       this.tail = this.tail.prev;
//       this.tail.next = null;
//     }
//     this.size--;
//     return data;
//   }

//   get_front() {
//     console.log(this.head.data);
//   }

//   get_rear() {
//     console.log(this.tail.data);
//   }

//   print() {
//     let result = '';
//     let current = this.head;

//     if (current === null) console.log('Dequeue is Empty');
//     else {
//       while (current.next) {
//         result += `${current.data} `;
//         current = current.next;
//       }
//       result += current.data;
//       console.log(result);
//     }
//   }
// }

// let deque = new Dequeue();

// deque.add_front(1); // front에 1 추가 => 1
// deque.add_rear(2); //  rear에 2추가  => 1 2
// deque.add_front(3); // front에 3추가 => 3 1 2
// deque.add_rear(4); // rear에 4 추가 => 3 1 2 4
// deque.print(); //   3 1 2 4 출력

// deque.delete_front(); // front 제거 => 1 2 4
// deque.print(); // 1 2 4 출력

// deque.delete_rear(); // rear 제거  => 1 2
// deque.print(); // 1 2 출력

// deque.get_front(); //  front 확인 => 1 출력
// deque.get_rear(); // rear 확인 =>  2 출력
// deque.print(); // 확인만 하고 값을 제거하지 않았기 때문에 1 2 출력

// deque.init(); // 초기화
// console.log(deque.isEmpty()); // 초기화 했으므로 비어있기 때문에 true 출력
// deque.print(); // Dequeue is Empty출력

class DequeueByArray {
  constructor() {
    this.arr = [];
  }

  init() {
    this.arr = [];
  }

  isEmpty() {
    return this.arr.length === 0;
  }

  add_front(item) {
    this.arr.unshift(item);
  }

  add_rear(item) {
    this.arr.push(item);
  }

  delete_front() {
    return this.arr.shift();
  }

  delete_rear() {
    return this.arr.pop();
  }

  get_front() {
    console.log(this.arr[0]);
  }

  get_rear() {
    console.log(this.arr[this.arr.length - 1]);
  }

  print() {
    if (this.isEmpty()) console.log('Dequeue is empty');
    console.log(this.arr.reduce((acc, cur) => (acc += `${cur} `), ''));
  }
}
let deque = new DequeueByArray();

deque.add_front(1); // front에 1 추가 => 1
deque.add_rear(2); //  rear에 2추가  => 1 2
deque.print(); //   1 2  출력

deque.add_front(3); // front에 3추가 => 3 1 2
deque.add_rear(4); // rear에 4 추가 => 3 1 2 4
deque.print(); // 3 1 2 4 출력

deque.delete_front(); // front 제거 => 1 2 4
deque.print(); // 1 2 4 출력

deque.delete_rear(); // rear 제거  => 1 2
deque.print(); // 1 2 출력

deque.get_front(); //  front 확인 => 1 출력
deque.get_rear(); // rear 확인 =>  2 출력
deque.print(); // 확인만 하고 값을 제거하지 않았기 때문에 1 2 출력

deque.init(); // 초기화
console.log(deque.isEmpty()); // 초기화 했으므로 비어있기 때문에 true 출력
deque.print(); // Dequeue is Empty출력
