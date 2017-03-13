// Write a function to find the 2nd largest element in a binary search tree.
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

// function assumes tree is a balanced binary search tree
function findSecondLargest(tree) {

  function inner(node, values) {
    values.push(node.value);

    if (node.right) {
      return inner(node.right, values);
    } else {
      return values;
    }
  }

  let arr = inner(tree, []);
  return arr[arr.length - 2];
}

// test case
let tree = new BinaryTreeNode(1);
g.insertRight(2);
g.right.insertRight(3);
g.right.right.insertRight(5);

console.log(findSecondLargest(tree)) // should return 3
