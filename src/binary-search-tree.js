const { NotImplementedError } = require('../extensions/index.js');
const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  storage;
  root() {
    if (!this.storage) {
      return null;
    }
    return this.storage;
  }

  add(data) {
    let node = new Node(data);
    let item = this.storage;
    if (!this.storage) {
      this.storage = node;
    }
    else {
      while (item !== null) {
        if (item.left === null && data < item.data ) {
          item.left = node;
          return;
        }
        else if (item.right === null && data > item.data ) {
          item.right = node;
          return;
        }
        else if (data < item.data) {
          item = item.left;
        }
        else if (data > item.data) {
          item = item.right;
        }
      }
    }
  }

  has(data) {
    let item = this.storage;

    while (item !== null) {
      if (item.data === data) {
        return true;
      }
      else if (data < item.data) {
        item = item.left;
      }
      else if (data > item.data) {
        item = item.right;
      }
    }
    return false;
  }

  find(data) {
    let item = this.storage;

    while (item !== null) {
      if (item.data === data) {
        return item;
      }
      else if (data < item.data) {
        item = item.left;
      }
      else if (data > item.data) {
        item = item.right;
      }
    }
    return null;
  }

  remove(data) {
    let item = this.storage;

    let prev_item = item;
    while (item !== null) {
      if (item.data === data) {
        if (item.left === null && item.right === null) {
          if (item.data === prev_item.data){
            this.storage = null;
            return ;
          }
          else if (item.data < prev_item.data) {
            prev_item.left = null;
          }
          else if (item.data > prev_item.data) {
            prev_item.right = null;
          }
          return ;
        }
        else if (item.right === null) {
          Object.assign(item, item.left);
          return ;
        }
        else {
        let delElement = item;
          item = item.right;
          while (item !== null){
            if (item.left === null){
              delElement.data = item.data;
              if (item.left === null && item.right === null && prev_item.data > item.data) {
                prev_item.left = null;
              }
              else if (item.right === null && prev_item.data > item.data){
                prev_item.left = item.right;
                item.left = delElement.left;
              }
              
              return ;
            }
            else{
              prev_item = item;
              item = item.left;
            }
          }
        }
      }
      else if (data < item.data) {
        prev_item = item;
        item = item.left;
      }
      else if (data > item.data) {
        prev_item = item;
        item = item.right;
      }
    }
    return ;
  }

  
  min() {
    if (!this.storage) {
      return null;
    }
    let item = this.storage;

    while (item !== null) {
      if (item.left === null) {
        return item.data;
      }
      else {
        item = item.left;
      }
    }
  }

  max() {
    if (!this.storage) {
      return null;
    }
    let item = this.storage;

    while (item !== null) {
      if (item.right === null) {
        return item.data;
      }
      else {
        item = item.right;
      }
    }
  }

  
}

module.exports = {
  BinarySearchTree
};