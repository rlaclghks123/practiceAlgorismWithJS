class Tree {
  constructor(val) {
    this.val = val;
    this.leftNode = null;
    this.rightNode = null;
  }

  getVal() {
    return this.val;
  }

  setVal(val) {
    this.val = val;
  }

  addLeftNode(node) {
    this.leftNode = node;
  }

  getLeftNode(node) {
    return this.leftNode;
  }

  addRightNode(node) {
    this.rightNode = node;
  }

  getRightNode(node) {
    return this.rightNode;
  }

  // 전위순회
  preOrderTraversal(node) {
    if (!node) {
      return;
    }

    console.log(node.val);
    this.preOrderTraversal(node.leftNode);
    this.preOrderTraversal(node.rightNode);
  }

  // 중위순회
  inOrderTraversal(node) {
    if (!node) {
      return;
    }

    this.inOrderTraversal(node.leftNode);
    console.log(node.val);
    this.inOrderTraversal(node.rightNode);
  }

  // 후위순회
  postOrderTraversal(node) {
    if (!node) {
      return;
    }

    this.postOrderTraversal(node.leftNode);
    this.postOrderTraversal(node.rightNode);
    console.log(node.val);
  }
}

let root = new Tree(5);
let node = new Tree(3);
root.addLeftNode(node);

node = new Tree(7);
root.addRightNode(node);

node = new Tree(1);
root.leftNode.addLeftNode(node);

node = new Tree(6);
root.rightNode.addLeftNode(node);

node = new Tree(8);
root.rightNode.addRightNode(node);

console.log('start preOrder');
root.preOrderTraversal(root); // 5-3-1-7-6-8
console.log('');

console.log('start inOrder');
root.inOrderTraversal(root); // 1-3-5-6-7-8
console.log('');

console.log('start postOrder');
root.postOrderTraversal(root); // 1-3-6-8-7-5
console.log('');
