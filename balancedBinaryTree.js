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

// iterative depth-first linear time solution
function superBalance(firstNode) {
  let nodes = [];
  nodes.push([firstNode, 0]);
  let leafDepths = [];

  while (nodes.length) {
    let tuple = nodes.pop();
    let node = tuple[0]
    let depth = tuple[1];

    if (node.left) {
      nodes.push([node.left, depth+1]);
    }

    if (node.right) {
      nodes.push([node.right, depth+1]);
    }

    // we found a leaf
    if (!node.right && !node.left) {
      // if we haven't encountered this depth yet then add it
      if (leafDepths.indexOf(depth) < 0) {
        leafDepths.push(depth);
        // check for two cases in which the tree is not balanced:
        // if there are more than two different depths 
        // if there are exactly two depths but their difference is > 1
        if ((leafDepths.length > 2) || Math.abs(leafDepths[0] - leafDepths[1]) > 1) {
          return false;
        }
      }
    }

  } 

  return true;
}

// recursive depth-first linear time solution 
function isSuperBalanced(tree) {
  let isBalanced = true;
  let leafDepths = [];

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