// This is a stack problem
// Stacks are LIFO structures -> Last in First out
// Remember that in a stack you only have access to the top element
// To reach for other elements the top element has to be removed first
class MinStack {
  // Main stack
  stack: number[];
  // Stack to keep track of min numbers
  minStack: number[];

  constructor() {
    this.stack = [];
    this.minStack = [];
  }

  push(val: number): void {
    this.stack.push(val);
    // If this val is less or equal to our last element in the minStack
    // push it to the min stack
    if (
      !this.minStack.length ||
      val <= this.minStack[this.minStack.length - 1]
    ) {
      this.minStack.push(val);
    }
  }

  pop(): void {
    // If the element we are popping is equal to the top element in minStack
    // pop that one too
    if (this.stack.pop() === this.minStack[this.minStack.length - 1]) {
      this.minStack.pop();
    }
  }

  top(): number {
    return this.stack[this.stack.length - 1];
  }

  getMin(): number {
    // The min element of the stack will always be the top element
    // of minStack
    return this.minStack[this.minStack.length - 1];
  }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
