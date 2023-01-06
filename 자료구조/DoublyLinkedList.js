class Node {
  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size == 0;
  }

  addHead(value) {
    //if list is empty
    if (this.isEmpty()) {
      this.head = new Node(value);
      this.tail = this.head;
    } else {
      let newNode = new Node(value);
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.size++;
  }

  addTail(value) {
    //if list is empty
    if (this.isEmpty()) {
      this.tail = new Node(value);
      this.head = this.tail;
    } else {
      let newNode = new Node(value);
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  }

  removeByValue(value) {
    let current = this.head; //Using tail instead of head also works.

    //if head is target
    if (current.data == value) {
      this.head = current.next;
      this.size--;
    } else {
      let prev = current;
      while (current.next) {
        if (current.data == value) {
          prev.next = current.next;
          current = current.next;
          break;
        }
        prev = current;
        current = current.next;
      }

      if (current.data == value) prev.next = null;
      this.size--;
    }
  }

  removeHead() {
    if (this.isEmpty()) return null;

    let data = this.head.data;

    //if head(=tail) is target
    if (this.head == this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
    }
    this.size--;
    return data;
  }

  removeTail() {
    if (this.isEmpty()) return null;

    let data = this.tail.data;

    //if head(=tail) is target
    if (this.head == this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }
    this.size--;
    return data;
  }

  findStartingHead(value) {
    let current = this.head;
    while (current.next) {
      if (current.data == value) return true;
      current = current.next;
    }
    return false;
  }

  findStartingTail(value) {
    let current = this.tail;
    while (current.prev) {
      if (current.data == value) return true;
      current = current.prev;
    }
    return false;
  }
  print() {
    let result = '';
    let current = this.head;
    if (current === null) return null;
    while (current.next) {
      result += `${current.data} -> `;
      current = current.next;
    }
    result += current.data;
    console.log(result);
  }
}

let doubleLinkedList = new DoublyLinkedList();

for (let i = 1; i <= 5; i++) doubleLinkedList.addHead(i);
doubleLinkedList.print(); //5->4->3->2->1

doubleLinkedList.removeHead();
doubleLinkedList.print(); //4->3->2->1

doubleLinkedList.removeByValue(3);

doubleLinkedList.print(); //4->2->1
doubleLinkedList.removeTail();
doubleLinkedList.print(); //4->2

doubleLinkedList.addTail(1);
doubleLinkedList.print(); //4->2->1
