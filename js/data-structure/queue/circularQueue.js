class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class CircularQueue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // 入队列
  enqueue(value) {
    const node = new Node(value);
    if (this.head === null) {
      this.head = node;
      this.head.next = this.head;
      this.tail = this.head;
    } else {
      this.tail.next = node;
      this.tail = node;
      this.tail.next = this.head;
    }
  }

  // 出队列
  dequeue() {
    if (this.head === null) return undefined;

    const { value } = this.head;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = this.head;
    } else {
      this.head = this.head.next;
      this.tail.next = this.head;
    }
    return value;
  }
}

// test
const queue = new CircularQueue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

for (let i = 1; i < 5; i += 1) {
  console.log(queue.dequeue()); // 1 2 3 undefined;
}
