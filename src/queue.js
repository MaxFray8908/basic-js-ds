const { NotImplementedError } = require('../extensions/index.js');
const { ListNode } = require('../extensions/list-node.js');

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
  storage;

  getUnderlyingList() {
    return this.storage;
  }

  enqueue(value) {
    let node = new ListNode(value);
    let item = this.storage;
    if (!this.storage) {
      this.storage = node;
    }
    else {
      while (item !== null) {
        if (item.next === null) {
          item.next = node;
          return
        }
        else {
          item = item.next;
        }
      }
    }
  }

  dequeue() {
    let valueDelete = this.storage.value;
    this.storage = this.storage.next;
    return valueDelete;
  }
}

module.exports = {
  Queue
};
