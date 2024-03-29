class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class QueueBasedOnLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // 入队列
  enqueue(value) {
    if (this.head === null) {
      this.head = new Node(value);
      this.tail = this.head;
    } else {
      this.tail.next = new Node(value);
      this.tail = this.tail.next;
    }
  }

  // 出队列
  dequeue() {
    if (this.head === null) return undefined;

    const { value } = this.head;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      return value;
    }

    this.head = this.head.next;
    return value;
  }
}

// test
const queue = new QueueBasedOnLinkedList();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

for (let i = 1; i < 5; i += 1) {
  console.log(queue.dequeue()); // 1 2 3 undefined;
}
