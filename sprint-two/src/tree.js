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
  var searchTree = function(node) {
    var foundValue = false;

    var search = function(subNode) {
      
      if (subNode.value === target) {
        foundValue = true;
      } else {
        subNode.children.forEach(function(child) {
          search(child);
        }); 
      }

    };

    search(node);

    return foundValue;
  };
  
  return searchTree(this);
};


treeMethods.each = function(callback) {

  var eachNode = function eachNode(node) {
    if (node.value !== undefined) {
      callback(node);
    }
    node.children.forEach( child => {
      eachNode(child);
    });
  };

  eachNode(this);
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
 */


