class LinkedNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  // push()
  push(val) {
    const newNode = new LinkedNode(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
    return this;
  }

  pop() {
    if (!this.tail) return undefined;
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
      return null;
    }
    let current = this.head;
    let prev = null;
    while (current.next) {
      prev = current;
      current = current.next;
    }
    this.tail = prev;
    this.tail.next = null;
    this.size--;

    return current;
  }

  shift() {
    if (!this.head) return undefined;
    let current = this.head;
    this.head = current.next;
    this.size--;
    if (this.size === 0) this.tail = null;
    return current;
  }

  unshift(val) {
    const newNode = new LinkedNode(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.size++;
    return this;
  }

  getLinkedNodeAt(index) {
    if (index < 0 || index >= this.size) return null;
    let counter = 0;
    let current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }

  setLinkedNodeAt(index, val) {
    let node = this.getLinkedNodeAt(index);
    if (node) {
      node.val = val;
      return true;
    }
    return false;
  }

  insertLinkedNodeAt(index, val) {
    if (index < 0 || index > this.size) return false;
    if (index === 0) return !!this.unshift(val);
    if (index === this.size) return !!this.push(val);
    let prev = this.getLinkedNodeAt(index - 1);
    let current = prev.next;
    let newNode = new LinkedNode(val);
    prev.next = newNode;
    newNode.next = current;
    this.size++;
    return true;
  }

  removeLinkedNodeAt(index) {
    if (index < 0 || index >= this.size) return undefined;
    if (index === 0) return this.shift();
    if (index === this.size - 1) return this.pop();
    let prev = this.getLinkedNodeAt(index - 1);
    let current = prev.next;
    prev.next = current.next;
    this.size--;
    return current;
  }

  reverse() {
    let current = this.head;
    this.head = this.tail;
    this.tail = current;
    let next;
    let prev = null;
    while (current) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    return this;
  }

  printLinkedList() {
    let current = this.head;
    let str = '';
    while (current) {
      if (current.next === null) {
        str += `${current.val}`;
        break;
      }
      str += `${current.val} -> `;
      current = current.next;
    }
    console.log(str);
  }

  getSize() {
    return this.size;
  }
}

const list = new SinglyLinkedList();
list.push(1);
list.push(2);
list.push(3);
// list.printLinkedList();
// list.pop();
list.printLinkedList();
list.reverse();
list.printLinkedList();
console.log(list);
