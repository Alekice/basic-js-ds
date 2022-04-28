const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  queue = {};
  length = 0;

  getUnderlyingList() {
    return this.queue;
  }

  enqueue(value) {
    if (!this.length) {
      this.queue.value = value;
      this.queue.next = null;
      this.length = 1;
    } else {
      let current = this.queue;
      while (current.next) {
        current = current.next;
      }
      current.next = {
        value: value,
        next: null
      }
      this.length++;
    }
    return this.queue;
  }

  dequeue() {
    let deleted = this.queue.value;
    if (this.length === 1) {
      this.queue = {};
      this.length = 0;
    } else {
      this.queue = this.queue.next;
      this.length--;
    }
    return deleted;
  }
}

module.exports = {
  Queue
};
