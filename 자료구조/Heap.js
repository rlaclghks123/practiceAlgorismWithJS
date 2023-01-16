class Heap {
  constructor() {
    this.items = [];
  }

  swap(index1, index2) {
    let temp = this.items[index1]; // items의 index1의 값을 temp 담아줍니다.

    this.items[index1] = this.items[index2]; // index2를 index1에 담아줍니다.

    this.items[index2] = temp; // index2에 temp에 옮겨놨던 처음 index1의 값을 담아줍니다.
  }

  parentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  leftChildIndex(index) {
    return index * 2 + 1;
  }

  rightChildIndex(index) {
    return index * 2 + 2;
  }

  parentNode(index) {
    return this.items[this.parentIndex(index)];
  }

  leftChildNode(index) {
    return this.items[this.leftChildIndex(index)];
  }

  rightChildNode(index) {
    return this.items[this.rightChildIndex(index)];
  }

  peek() {
    return this.items[0];
  }

  size() {
    return this.items.length;
  }
}

class MinHeap extends Heap {
  bubbleUp() {
    let index = this.items.length - 1;

    while (this.parentNode(index) !== undefined && this.parentNode(index) > this.items[index]) {
      this.swap(index, this.parentIndex(index));

      index = this.parentIndex(index);
    }
  }

  bubbleDown() {
    let index = 0;

    while (
      this.leftChildNode(index) !== undefined &&
      (this.leftChildNode(index) < this.items[index] ||
        this.rightChildNode(index) < this.items[index])
    ) {
      let smallerIndex = this.leftChildIndex(index);

      if (
        this.rightChildNode(index) !== undefined &&
        this.rightChildNode(index) < this.items[smallerIndex]
      ) {
        smallerIndex = this.rightChildIndex(index);
      }

      this.swap(index, smallerIndex);

      index = smallerIndex;
    }
  }

  // 힙에 노드를 추가

  push(item) {
    this.items[this.items.length] = item;
    this.bubbleUp();
  }

  // 최소 힙이라면 최솟값이, 최대힙이라면 최댓값을 나타낸다.

  poll() {
    let item = this.items[0]; // 첫번째 원소 keep
    if (item === undefined) {
      return 'Heap이 비어있습니다';
    }
    this.items[0] = this.items[this.items.length - 1]; // 맨 마지막 원소를 첫번째 원소로 복사
    this.items.pop(); // 맨 마지막 원소 삭제
    this.bubbleDown();
    return item;
  }
}

class MaxHeap extends MinHeap {
  bubbleUp() {
    let index = this.items.length - 1;
    while (this.parentNode(index) !== undefined && this.parentNode(index) < this.items[index]) {
      this.swap(index, this.parentIndex(index));
      index = this.parentIndex(index);
    }
  }

  bubbleDown() {
    let index = 0;

    while (
      this.leftChildNode(index) !== undefined &&
      (this.leftChildNode(index) > this.items[index] ||
        this.rightChildNode(index) > this.items[index])
    ) {
      let largerIndex = this.leftChildIndex(index);
      if (
        this.rightChildNode(index) !== undefined &&
        this.rightChildNode(index) > this.items[largerIndex]
      ) {
        largerIndex = this.rightChildIndex(index);
      }
      this.swap(largerIndex, index);
      index = largerIndex;
    }
  }
}

const maxheap = new MaxHeap();
maxheap.push(2);
maxheap.push(1);
maxheap.push(4);
maxheap.push(3);
maxheap.push(6);
maxheap.push(5);
console.log(maxheap); // MaxHeap { items: [6,4,5,1,3,2] }

console.log(maxheap.poll()); // 1
console.log(maxheap.poll()); // 2
console.log(maxheap.poll()); // 3
console.log(maxheap.poll()); // 4
console.log(maxheap.poll()); // 5
console.log(maxheap.poll()); // 6
console.log(maxheap.poll()); // Heap이 비어있습니다.
