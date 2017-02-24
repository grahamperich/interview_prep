// Write a function to check that a binary tree is a valid binary search tree.

function BinaryTreeNode(value) {
    this.value = value;
    this.left  = null;
    this.right = null;
}

BinaryTreeNode.prototype.insertLeft = function(value) {
    this.left = new BinaryTreeNode(value);
    return this.left;
};

BinaryTreeNode.prototype.insertRight = function(value) {
    this.right = new BinaryTreeNode(value);
    return this.right;
};

BinaryTreeNode.prototype.isValidBinarySearchTree = function() {
  let inner = function(node, ancestorValues) {
    if (node.left && node.left.value > node.value || node.right && node.right.value < node.value) {
      return false;
    }

    if (node.left && node.left.value < node.value) {
      return inner(node.left);
    } 

    if (node.right && node.right.value > node.value) {
      return inner(node.right);
    } 

    if (!node.left && !node.right) {
      return true;
    }
  }
  return inner(this, []);
}