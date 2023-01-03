class Node {
  constructor(element) {
    this.element = element;
    this.next = null; // 양방향 이므로 다음값, 이전값을 가진다.
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = new Node('head');
  }

  // 노드를 찾아준다.
  find(item) {
    let currNode = this.head;
    while (currNode.element !== item) {
      currNode = currNode.next;
    }
    return currNode;
  }

  // 추가
  insert(newElement, item) {
    let newNode = new Node(newElement);
    let startNode = this.find(item);

    // Head인 경우
    if (startNode.next == null) {
      newNode.next = null;
      newNode.prev = startNode;
      startNode.next = newNode;
    }
    // Head가 아닌경우
    else {
      newNode.next = startNode.next;
      newNode.prev = startNode;
      startNode.next.prev = newNode;
      startNode.next = newNode;
    }
  }

  // 제거
  remove(item) {
    let currNode = this.find(item);
    if (currNode.next !== null) {
      currNode.prev.next = currNode.next;
      currNode.next.prev = currNode.prev;
      currNode.next = null;
      currNode.prev = null;
    }
  }

  // 연결리스트를 출력한다.
  toString() {
    let array = [];
    let currNode = this.head;
    while (currNode.next !== null) {
      array.push(currNode.next.element);
      currNode = currNode.next;
    }
    return array;
  }
}

const linkedList = new DoublyLinkedList();
linkedList.insert('Seoul', 'head'); // Seoul을 head로 지정한다. ['Seoul']
linkedList.insert('Busan', 'Seoul'); // Seoul다음에 Busan을 추가한다 ['Seoul','Busan']
linkedList.insert('Daegu', 'Seoul'); // Seoul 다음에 Daegu를 추가한다. ['Seoul','Daegu','Busan']
linkedList.insert('Incheon', 'Busan'); // Busan 다음에 Incheon을 추가한다. ['Seoul','Daegu','Busan','Incheon']
linkedList.remove('Busan'); // Busan을 제거한다. ['Seoul','Daegu','Incheon']

console.log(linkedList.toString()); // ['Seoul','Daegu','Incheon']
