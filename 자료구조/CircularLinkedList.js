class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
    this.prev = null;
  }
}

class LinkedList {
  constructor() {
    this.head = new Node('head');
    this.head.next = this.head; // 초기에 head노드 다음값을 null이 아닌 head를 다시 가리켜 원형을  만들어준다.
  }

  // 노드를 찾는다.
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
    let current = this.find(item);
    if (current.next !== null) {
      newNode.next = current.next;
      newNode.prev = current;
      current.next.prev = newNode;
      current.next = newNode;
    }
  }

  // 제거
  remove(item) {
    let currNode = this.find(item);
    if (currNode.next !== null) {
      currNode.prev.next = currNode.next;
      currNode.next.prev = currNode.prev;
    }
  }
}

const linkedList = new LinkedList();
linkedList.insert('Seoul', 'head'); //head->Seoul->head
linkedList.insert('Busan', 'Seoul'); //head->Seoul->Busan->head
linkedList.insert('Daegu', 'Seoul'); //head->Seoul->Daegu->Busan -> head
linkedList.insert('Incheon', 'Busan'); //head->Seoul->Daegu->Busan->Incheon->head
linkedList.remove('Busan'); //head->Seoul->Daegu->Incheon->head
