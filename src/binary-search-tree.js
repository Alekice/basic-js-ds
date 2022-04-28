const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  treeRoot = null;

  createNewBranch(element, value) {
    if (!element) {
      return {
        value: value,
        parent: null,
        left: null,
        right: null
      };
    } else if (element.value === value) {
      return element;
    } else if (value < element.value) {
      element.left = this.createNewBranch(element.left, value);
      return element;
    } else if (value > element.value) {
      element.right = this.createNewBranch(element.right, value);
      return element;
    }
  }

  root() {
    if (!this.treeRoot) return null;
    if (this.treeRoot) {
      this.data = this.treeRoot.value;
    }
    return this;   
  }

  add(data) {
    this.treeRoot = this.createNewBranch(this.treeRoot, data);
  }

  has(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  find(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};