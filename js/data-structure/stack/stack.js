class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class StackBasedOnLinkedList {
  constructor() {
    this.top = null;
  }

  push(value) {
    const node = new Node(value);
    if (this.top === null) {
      this.top = node;
    } else {
      node.next = this.top;
      this.top = node;
    }
  }

  pop() {
    if (this.top !== null) {
      const { value } = this.top;
      this.top = this.top.next;
      return value;
    }
    return undefined;
  }

  // 返回栈顶元素
  peek() {
    if (this.top === null) return undefined;
    return this.top.value;
  }

  clear() {
    this.top = null;
  }

  display() {
    let temp = this.top;
    while (temp !== null) {
      console.log(`${temp.value}`);
      temp = temp.next;
    }
  }
}

// 实现浏览器的前进后退
class SampleBrowser {
  constructor() {
    this.goStack = new StackBasedOnLinkedList();
    this.backStack = new StackBasedOnLinkedList();
  }

  // 显示当前页面
  displayPage() {
    const page = this.goStack.peek();
    if (page !== undefined) {
      return page;
    }
    return '页面为空';
  }

  // 正常浏览，是不断入栈的过程
  browsing(value) {
    this.goStack.push(value);
    this.backStack.clear();
    this.display();
  }

  // 后退
  backBrowsing() {
    if (this.backStack !== null) {
      const value = this.backStack.pop();
      this.goStack.push(value);
    }
  }

  // 前进
  goBrowsing() {
    if (this.backStack.top !== null) {
      const value = this.backStack.pop();
      this.goStack.push(value);
    }
  }
}

// test

const stack = new StackBasedOnLinkedList();
for (let i = 0; i < 3; i += 1) {
  stack.push(i);
}
stack.display();
