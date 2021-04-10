class Stack {
  constructor() {
    this.mass = [];
  }

  push(element) {
    this.mass.push(element);
  }

  peek() {
    return this.mass[this.mass.length - 1];
  }

  pop() {
    const a = this.mass[this.mass.length - 1];
    this.mass.splice(this.mass.length - 1, 1);
    return a;
  }
}

module.exports = Stack;
