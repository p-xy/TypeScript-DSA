class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}
class DoublyLinkedList {
  constructor() {
    this.head = null;
  }

  // 添加：从尾部添加元素
  append(value) {
    const node = new Node(value);
    if (this.head === null) {
      this.head = node;
    }
    let currentNode = this.head;
    while (currentNode.next !== null) {
      currentNode = currentNode.next;
    }
    currentNode.next = node;
    node.prev = currentNode;
  }

  // 删除：略
}
