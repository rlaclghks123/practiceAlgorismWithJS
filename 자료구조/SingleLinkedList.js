class Node {
  constructor(item) {
    this.data = item;
    this.next = null;
  }
}

class SingleLinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size == 0;
  }

  add(item) {
    if (this.isEmpty()) {
      this.head = new Node(item);
      this.size++;
    } else {
      let newNode = this.head;
      this.head = new Node(item);
      this.head.next = newNode;
      this.size++;
    }
  }

  removeByValue(item) {
    let current = this.head;

    if (current.data == item) {
      this.head = current.next;
      this.size--;
    } else {
      let prev = current;
      let error = true;

      while (current.next) {
        if (current.data == item) {
          prev.next = current.next;
          current = current.next;
          error = false;
          break;
        }
        prev = current;
        current = current.next;
      }
      if (current.data == item) {
        prev.next = null;
        error = false;
      }

      if (error) console.log(`There is no ${item}`);
      else this.size--;
    }
  }

  removeHead() {
    let item = null;
    if (this.head != null) {
      item = this.head.data;
      this.head = this.head.next;
      this.size--;
    }
    return item;
  }

  search(value) {
    let current = this.head;
    if (current === null) return null;
    while (current.next) {
      if (current.data == value) return true;
      current = current.next;
    }
    return false;
  }

  print() {
    let result = '';
    let current = this.head;

    while (current.next) {
      result += `${current.data} `;
      current = current.next;
    }
    result += current.data;

    console.log(result);
  }
}

let singleLinkedList = new SingleLinkedList();

console.log(singleLinkedList.isEmpty()); // true 출력
singleLinkedList.add(1); // 1 추가

singleLinkedList.print(); // 1 출력
console.log(singleLinkedList.isEmpty()); // false 출력

singleLinkedList.add(2); // 2 추가
singleLinkedList.print(); // 2 1 출력
singleLinkedList.removeHead(); // head인 2 제거

singleLinkedList.print(); // 1 출력
singleLinkedList.add(2); // 2 추가
singleLinkedList.add(3); // 3 추가
singleLinkedList.removeByValue(2);
singleLinkedList.print(); // 3 1 출력

singleLinkedList.removeByValue(2); // There is no 2 출력
