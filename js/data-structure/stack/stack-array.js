export default class StackArray {
  constructor() {
    this.stack = [];
  }

  push(item) {
    this.stack.push(item);
  }

  pop() {
    this.stack.pop();
  }

  peek() {
    return this.stack[this.stack.length - 1];
  }

  size() {
    return this.stack.length;
  }

  isEmpty() {
    return this.stack.length === 0;
  }

  clear() {
    this.stack = [];
  }
}
