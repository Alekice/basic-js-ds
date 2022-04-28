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
  const listValues = [];
  let current = l;
  while (current.next) {
    if (current.value !==k) {
      listValues.push(current.value);
    }
    current = current.next;
    if (!current.next && current.value !==k) {
      listValues.push(current.value);
    }
  }
  
  console.log(listValues);
  
  let answer = {};
  for (let i = 0; i < listValues.length; i++) {
    if (i === 0) {
      answer.value = listValues[i];
      answer.next = null;
    } else {
      let current = answer;
      while (current.next) {
        current = current.next;
      }
      current.next = {
        value: listValues[i],
        next: null
      };
    }
}
  return answer;
}

module.exports = {
  removeKFromList
};
