// 栈，先进先出
export default class StackArray {
  private stack;

  constructor() {
    this.stack = [];
  }

  push(item) {
    this.stack.push(item);
  }

  peek() {
    return this.stack
  }
}