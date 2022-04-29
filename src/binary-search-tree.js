const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  treeRoot = null;

  root() {
    return this.treeRoot;   
  }

  add(data) {
    this.treeRoot = createNewBranch(this.treeRoot, data);

    function createNewBranch(element, data) {
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
        element.left = createNewBranch(element.left, data);
        return element;
      } else if (data > element.data) {
        element.right = createNewBranch(element.right, data);
        return element;
      }
    }
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

  find(data) {
    return findNode(this.treeRoot, data);
    
    function findNode(node, data) {
      if (!node) {
        return null;
      } else if (node.data === data) {
        return node;
      } else if (data < node.data) {
        return findNode(node.left, data);
      } else if (data > node.data) {
        return findNode(node.right, data);
      }
    }
  }

  remove(data) {
    return removeNode(this.treeRoot, data);
    
    function removeNode(node, data) {
      if (!node) {
        return null;
      } else if (node.data === data) {
        if (!node.left && !node.right) {
          return null;
        } else if (!node.left) {
          return node.right;
        } else if (!node.right) {
          return node.left;
        }
        
        let current = node.right;
        
        while(current.left) {
          current = current.left;
        }
        node.data = current.data;
        node.right = removeNode(node.right, current.data);
        
      } else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = removeNode(node.right, data);
        return node;
      }
    }
  }

  min() {
    if (!this.treeRoot) {
      return null;
    }

    let min = this.treeRoot;
    while (min.left) {
      min = min.left;
    }

    return min.data;
  }

  max() {
    if (!this.treeRoot) {
      return null;
    }

    let max = this.treeRoot;
    while (max.right) {
      max = max.right;
    }

    return max.data;
  }
}

module.exports = {
  BinarySearchTree
};