// A tree is "superbalanced" if the difference between the depths of any two leaf nodes is no greater than one.

// Here's a sample binary tree node class:

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

function isSuperBalanced(tree) {
  var isBalanced = true;
  var leafDepths = [];

  function inner(node, depth) {
    if (node.left) {
      inner(node.left, depth+1)
    }

    if (node.right) {
      inner(node.right, depth+1)
    }

    if (!node.left && !node.right) {
      leafDepths.push(depth)
    }
  }

  inner(tree, 0);
  return (Math.max.apply(Math, leafDepths) - Math.min.apply(Math, leafDepths)) <= 1

}