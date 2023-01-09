class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class SingleLinkedList {
  constructor() {
    this.head = null; //처음에 데이터가 없다면 head는 null이다.
    this.tail = null;
    this.size = 0; //리스트의 크기를 나타내며, 초기값은 0이다.
  }

  isEmpty() {
    return this.size == 0;
  }

  insertHead(data) {
    if (this.isEmpty()) {
      this.head = new Node(data);
      this.size++;
    } else {
      let current = this.head;
      this.head = new Node(data);
      this.head.next = current;
      this.size++;
    }
  }

  insertTail(data) {
    let newNode = new Node(data);
    if (this.isEmpty()) {
      this.head = new Node(data);
      this.size++;
    } else {
      let current = this.head;

      while (current.next) {
        // tail을 찾아준다.
        current = current.next;
      }

      current.next = newNode; // next가 null === tail 이므로 newNode를 넣어준다.
    }
    this.size++; //length 는 1증가
  }

  insert(data, index) {
    if (index > 0 && index > this.size) {
      console.log('범위를 벗어났습니다');
      return;
    }
    // 범위를 벗어나면 종료해준다.
    if (index === 0) {
      let current = this.head;
      this.head = new Node(data);
      this.head.next = current;
      this.size++;
      return;
    }

    let currentNode = this.head;
    let newNode = new Node(data);
    let count = 0;
    let temp;

    while (count < index - 1) {
      count++;
      currentNode = currentNode.next;
    }

    temp = currentNode.next;
    currentNode.next = newNode;
    newNode.next = temp;

    this.size++;
  }

  getAt(index) {
    let currentNode = this.head;
    let count = 0;

    if (currentNode === null) return null;
    while (currentNode) {
      if (count == index) {
        console.log(currentNode.data);
      }
      count++;
      currentNode = currentNode.next;
    }
    return null;
  }

  remove(index) {
    if (index > 0 && index > this.size) {
      console.log('범위를 벗어났습니다');
      return;
    }

    let currentNode = this.head;

    let count = 0;

    // Remove first
    if (index === 0) {
      this.head = currentNode.next;
    } else {
      //loop를 통해 해당 index의 연결고리를 끊는다.
      while (count < index - 1) {
        count++;
        currentNode = currentNode.next;
      }

      currentNode.next = currentNode.next.next;
    }

    this.size--;
  }

  clear() {
    this.head = null;
    this.size = 0;
  }

  print() {
    let result = '';
    let currentNode = this.head;

    if (currentNode === null) return null;
    while (currentNode.next) {
      result += `${currentNode.data} `;
      currentNode = currentNode.next;
    }
    result += currentNode.data;

    console.log(result);
  }
}
const linkedList = new SingleLinkedList();

// isEmpty Test

console.log(linkedList.isEmpty()); // true 출력

// insertHead Test

linkedList.insertHead(100);
linkedList.print(); // 100 출력

linkedList.insertHead(200);
linkedList.print(); // 200 100 출력

linkedList.insertHead(300);
linkedList.print(); // 300 200 100 출력
console.log(linkedList.isEmpty()); // false 출력

// insertTail Test
linkedList.insertTail(400);
linkedList.print(); // 300 200 100 400 출력

linkedList.insert(500, 2);
linkedList.insert(900, 4);
linkedList.print(); // 300 200 500 100 400 출력

linkedList.getAt(3); // 100 출력

linkedList.remove(1);
linkedList.print(); // 300 200 500 400 출력

linkedList.clear();
linkedList.insertHead(100);
linkedList.print(); // 100 출력
