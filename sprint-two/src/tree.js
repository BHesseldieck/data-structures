var Tree = function(value, parent) {
  var newTree = Object.create(treeMethods);
  newTree.value = value;
  newTree.parent = parent || null;

  newTree.children = [];

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value, this));
};

treeMethods.contains = function(target) {
  var found = false;
  var findTarget = function findTarget(node){
    if (node.value === target) {
      found = true;
    } else if (node.children.length > 0) {
      node.children.forEach( child => {
        findTarget(child);
      });
    }
  };
  findTarget(this);
  return found;
};

treeMethods.each = function treeEach (callback) {
  var traverseTree = function traverseTree (node) {
    callback(node);
    if (node.children.length > 0) {
      node.children.forEach( child => {
        traverseTree(child);
      });
    }
  };
  traverseTree(this);
};

treeMethods.findNode = function(target) {
  var node;
  var find = function(subNode) { 
    if (subNode.value === target) {
      node = subNode;
    } else {
      subNode.children.forEach(function(child) {
        find(child);
      });
    }
  };
  find(this);
  return node;
};

treeMethods.removeParent = function(value) {
  var newRoot = this.findNode(value);
  newRoot.parent.children = newRoot.parent.children.filter( child => child.value !== value);
  newRoot.parent = null;
  return newRoot;
};


/*
 * Complexity: What is the time complexity of the above functions?
 * since we are traversing every branch is the complexity linear: O(n)
 */


