const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  treeRoot = null;

  createNewBranch(element, data) {
    if (!element) {
      return {
        data: data,
        parent: null,
        left: null,
        right: null
      };
    } else if (element.data === data) {
      return element;
    } else if (data < element.data) {
      element.left = this.createNewBranch(element.left, data);
      return element;
    } else if (data > element.data) {
      element.right = this.createNewBranch(element.right, data);
      return element;
    }
  }

  root() {
    return this.treeRoot;   
  }

  add(data) {
    this.treeRoot = this.createNewBranch(this.treeRoot, data);
  }

  has(data) {
    return searchTree(this.treeRoot, data);

    function searchTree(element, data) {
      if (!element) {
        return false;
      } else if (element.data === data) {
        return true;
      } else if (data < element.data) {
        return searchTree(element.left, data);
      } else if (data > element.data) {
        return searchTree(element.right, data);
      }
    }
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