var Tree = function(value) {
  var newTree = Object.create(treeMethods);
  newTree.value = value;

  newTree.children = [];  
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
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


/*
 * Complexity: What is the time complexity of the above functions?
 */


