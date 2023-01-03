class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class SingleLinkedList {
  constructor() {
    this.head = new Node('head');
  }

  // 새로운 값을 맨뒤에 추가한다.
  append(newElement) {
    let newNode = new Node(newElement); //새로운 노드 생성
    let startNode = this.head; // 시작 노드

    // 다음값이 존재한다면 다음노드를 시작노드로 바꿔준다.
    while (startNode.next != null) {
      startNode = startNode.next;
    }

    // 다음값이 존재하지 않는다면 새로운 노드를 만들어준다.
    startNode.next = newNode;
  }

  // 새로운 값을 원하는 위치에 추가한다.
  insert(newElement, item) {
    let newNode = new Node(newElement); //새로운 노드 생성
    let startNode = this.find(item); // 삽입할 위치의 노드 찾기
    newNode.next = startNode.next; // 찾은 노드가 가리키는 노드를 새로은 노드가 가리키기
    startNode.next = newNode; // 찾은 노드는 이제부터 새로운 노드를 가리키도록 하기
  }

  // 노드를 제거한다.
  remove(item) {
    let preNode = this.findPrevious(item); // 삭제할 노드를 가리키는 노드 찾기
    preNode.next = preNode.next.next; // 삭제할 노드 다음 노드를 가리키도록 하기
  }

  // 노드를 찾는다.
  find(item) {
    let currNode = this.head;
    while (currNode.element !== item) {
      currNode = currNode.next;
    }
    return currNode;
  }

  // 이전 노드를 찾는다.
  findPrevious(item) {
    let currNode = this.head;
    while (currNode.next != null && currNode.next.element !== item) {
      currNode = currNode.next;
    }
    return currNode;
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

let linkedList = new SingleLinkedList();
linkedList.insert('A', 'head'); // A를 head로 지정 ['A']
linkedList.insert('B', 'A'); // A가 B를 가리킨다. ['A','B']
linkedList.insert('C', 'B'); // C가 B를 가리킨다. ['A','B','C']
linkedList.remove('B'); // B를 제거한다. ['A','C']
linkedList.append('D'); // D를 마지막에 추가한다.  ['A','C','D']
linkedList.append('E');
['A', 'C', 'D', 'E'];

console.log(linkedList.toString()); // ['A','C','D','E']
