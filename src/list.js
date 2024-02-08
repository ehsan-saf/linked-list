import Node from "./node.js";

export default class LinkedList {
  constructor() {
    this.headNode = null;
  }

  append(value) {
    let node = new Node(value);
    if (this.headNode === null) {
      this.headNode = node;
    } else {
      this.tail().next = node;
    }
  }

  prepend(value) {
    let node = new Node(value);
    if (this.headNode) {
      let previousHead = this.headNode;
      this.headNode = node;
      this.headNode.next = previousHead;
    } else {
      this.headNode = node;
    }
  }

  head() {
    return this.headNode;
  }

  tail() {
    let node = this.headNode;
    while (node.next) {
      node = node.next;
    }
    return node;
  }

  size() {
    let count = 0;
    if (this.headNode) {
      count += 1;
      let node = this.headNode;
      while (node.next) {
        count += 1;
        node = node.next;
      }
    }
    return count;
  }

  at(index) {
    let node = this.headNode;
    let currentIndex = 0;
    let targetNode = null;
    while (node) {
      if (currentIndex === index) {
        targetNode = node;
        break;
      }
      node = node.next;
      currentIndex += 1;
    }
    return targetNode;
  }

  pop() {
    this.at(this.size() - 2).next = null;
  }

  contains(value) {
    let node = this.headNode;
    let hasValue = false;
    while (node) {
      if (node.value === value) {
        hasValue = true;
        break;
      }
      node = node.next;
    }
    return hasValue;
  }

  find(value) {
    let node = this.headNode;
    let isFound = false;
    let index = 0;
    while (node) {
      if (node.value === value) {
        isFound = true;
        break;
      }
      index++;
      node = node.next;
    }
    return isFound ? index : null;
  }

  toString() {
    let node = this.headNode;
    let result = "";
    while (node) {
      result += ` ( ${node.value} ) -> `;
      node = node.next;
    }
    result += " null";
    console.log(result);
  }

  insertAt(value, index) {
    let newNode = new Node(value);
    if (index === 0) {
      this.prepend(value);
    } else {
      let pre = this.at(index - 1);
      if (pre) {
        if (pre.next) {
          let after = pre.next;
          pre.next = newNode;
          newNode.next = after;
        } else {
          pre.next = newNode;
        }
      }
    }
  }

  removeAt(index) {
    if (index === 0) {
      this.headNode = this.headNode.next;
    } else if (index > 0) {
      let pre = this.at(index - 1);
      let removeNode = this.at(index);
      let nextTemp = removeNode.next;
      pre.next = nextTemp;
    }
  }
}
