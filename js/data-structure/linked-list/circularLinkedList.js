class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class CircularLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // 添加：从链表尾部添加元素
  append(value) {
    const node = new Node(value);
    if (this.head === null) {
      this.head = node;
      this.tail = node;
      this.tail.next = this.head;
    } else {
      this.tail.next = node;
      this.tail = this.tail.next;
      this.tail.next = this.head;
    }
  }

  // 删除： 链表有各种不同需求的删除操作，比如根据值或索引删除，都需要先实现查找操作，
  // 代码实现起来比较复杂，可参考单链表的实现，这里略过。
}
