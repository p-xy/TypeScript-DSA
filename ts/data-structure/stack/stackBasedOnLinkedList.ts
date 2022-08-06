class Node {
  value;
  next;
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class StackBasedOnLinkedList {
  top;
  constructor() {
    this.top = null;
  }
}