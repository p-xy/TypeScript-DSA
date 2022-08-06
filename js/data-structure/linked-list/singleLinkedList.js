class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SingleLinkedList {
  constructor() {
    this.head = new Node('head');// 哨兵节点
  }

  // 链表尾部添加元素
  append(value) {
    let currentNode = this.head;
    while (currentNode.next !== null) {
      currentNode = currentNode.next;
    }
    currentNode.next = new Node(value);
  }

  // 查找给定索引查找节点,从0开始
  findByIndex(index) {
    let currentNode = this.head.next;
    let currentIndex = 0;
    while (currentNode !== null) {
      if (currentIndex === index) {
        return currentNode;
      }
      currentNode = currentNode.next;
      currentIndex += 1;
    }
    return undefined;
  }

  // 根据给定值查找节点
  findByValue(value) {
    let currentNode = this.head.next;
    while (currentNode !== null) {
      if (currentNode.value === value) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }
    return undefined;
  }

  // 查找前一个
  findPrev(value) {
    let currentNode = this.head;
    while (currentNode && (currentNode.value !== value) && currentNode.next) {
      if (currentNode.next.value === value) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }
    console.log('没有找到');
    return undefined;
  }

  // 指定元素向后插入
  insert(value, posValue) {
    const posNode = this.findByValue(posValue);
    if (posNode === undefined) {
      console.log('没有找到插入位置');
    } else {
      const node = new Node(value);
      node.next = posNode.next;
      posNode.next = node;
    }
  }

  // 删除给定元素
  remove(value) {
    const prevNode = this.findPrev(value);
    if (prevNode) {
      prevNode.next = prevNode.next.next;
    } else if (this.head.next.value === value) {
      this.head.next = null;
    }
  }

  // 遍历所有节点
  display() {
    let currentNode = this.head.next;
    while (currentNode) {
      console.log(currentNode.value);
      currentNode = currentNode.next;
    }
  }

  // ----- 以下为链表的一些操作-----
  // 反转单链表
  reverse() {
    let currentNode = this.head.next;
    let prevNode = null;
    while (currentNode !== null) {
      const nextNode = currentNode.next;
      currentNode.next = prevNode;
      prevNode = currentNode;
      currentNode = nextNode;
    }
    this.head.next = prevNode;
  }

  // 判断链表是否有环
  checkCircle() {
    let fast = this.head.next;
    let slow = this.head;
    while (fast !== null && fast.next !== null) {
      fast = fast.next.next;
      slow = slow.next;
      if (fast === slow) return true;
    }
    return false;
  }

  // 删除倒数第 n 个节点,n >= 1
  removeByIndexFromEnd(n) {
    this.reverse();
    let pos = 1;
    let currentNode = this.head.next;
    while (currentNode !== null && pos < n) {
      currentNode = currentNode.next;
      pos += 1;
    }
    if (currentNode === null) {
      console.log('没有该节点');
    } else {
      this.remove(currentNode.value);
      this.reverse();
    }
  }

  // 查找中间节点
  findMiddleNode() {
    let fast = this.head;
    let slow = this.head;
    while (fast.next !== null && fast.next.next !== null) {
      fast = fast.next.next;
      slow = slow.next;
    }
    return slow;
  }
}

// 合并两个有序链表
const mergeSortLinkLists = (listA, listB) => {
  let a = listA;
  let b = listB;

  if (!a) return b;
  if (!b) return a;

  let result;
  let currentNode;
  if (a.value <= b.value) {
    result = a;
    currentNode = a;
    a = a.next;
  } else {
    result = b;
    currentNode = b;
    b = b.next;
  }

  while (a && b) {
    if (a.value <= b.value) {
      currentNode.next = a;
      currentNode = currentNode.next;
      a = a.next;
    } else {
      currentNode.next = b;
      currentNode = currentNode.next;
      b = b.next;
    }
  }

  if (!a) {
    currentNode.next = b;
  } else {
    currentNode.next = a;
  }

  return result;
};

// Test
const list = new SingleLinkedList();
list.append('1');
list.append('2');
list.append('3');
list.append('4');
console.log('-------------insert item------------');
list.insert('1.5', '1'); // 首元素后插入
list.insert('4.5', '4'); // 尾元素后插入
list.display();
console.log('-------------remove item------------');
list.remove('1.5');
list.display();
console.log('-------------find by item------------');
console.log(list.findByValue('3'));
console.log('-------------find by index------------');
console.log(list.findByIndex(3));
console.log('-------------find prev------------');
console.log(list.findPrev('3'));
console.log('-----reverse--------');
list.reverse();
list.display();
console.log('-------remove by index from end');
list.removeByIndexFromEnd(5);
list.display();
console.log('------merge sort link lists');

const list2 = new SingleLinkedList();
list2.append(1);
list2.append(3.5);
list2.append(6);

list.reverse();
let result = mergeSortLinkLists(list2.head.next, list.head.next);
while (result !== null) {
  console.log(result.value);
  result = result.next;
}
