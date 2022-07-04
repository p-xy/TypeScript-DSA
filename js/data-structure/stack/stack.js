// 使用 javascript 对象构建栈
export default class Stack {
  constructor() {
    this.stack = {};
    this.count = 0;
  }

  push(item) {
    this.stack[this.count] = item;
    this.count += 1;
  }

  pop() {
    if (this.isEmpty()) {
      return undefined;
    }
    const result = this.stack[this.count - 1];
    delete this.stack[this.count - 1];
    this.count -= 1;
    return result;
  }

  peek() {
    return this.stack[this.count - 1];
  }

  isEmpty() {
    return this.count === 0;
  }

  clear() {
    this.stack = {};
    this.count = 0;
  }

  size() {
    return this.count;
  }
}
