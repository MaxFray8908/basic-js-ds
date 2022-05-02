const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {
  let item = l;
  if (item.value == k){
    l = item.next;
  }
  item = l;
  let prev_item = item;
  while (item != null){
    if (item.value == k){
      prev_item.next = item.next;
    }
    else {
      prev_item = item;
    }
    item = item.next;
    
  }
  return l
}

module.exports = {
  removeKFromList
};
