var BinarySearchTree = function(value) {

  var newTree = Object.create(binaryTreeMethods);
  newTree.value = value;
  newTree.left = null;
  newTree.right = null;
  return newTree;

};

var binaryTreeMethods = {
  insert: function(val) {

    this.traverse(this, val);
    var count = 0;
    this.depthFirstLog(function(node) {
      count++;
    });
    console.log(count, 'count');
    if (count >= Math.pow(2, this.height(this)) - 1 ) {
      this.rebalance();
    }
  },


  contains: function(val) {
    var found = false;

    var search = function (node, fVal) {

      if (node.value === fVal) {

        found = true;

      }
      if (fVal > node.value && node.right !== null) {

        search(node.right, fVal);

      } else if (fVal < node.value && node.left !== null) {

        search(node.left, fVal);
      }
    };

    search(this, val);

    return found;
  },

  depthFirstLog: function(cb) {

    var lookUp = function(node) {
      cb(node);

      if (node.left !== null) {
        lookUp(node.left);
      }

      if (node.right !== null) {
        lookUp(node.right);
      }
    };

    lookUp(this);
  },

  traverse: function(node, nValue) {
    if (nValue > node.value) {

      if (node.right !== null) {

        node.traverse(node.right, nValue);  

      } else {

        node.right = new BinarySearchTree(nValue);
      }
      
    } else if (nValue < node.value) {

      if (node.left !== null) {

        node.traverse(node.left, nValue);  

      } else {
        
        node.left = new BinarySearchTree(nValue);

      }

    }
  },

  height: function(node) {
    if (!node) {
      return false;
    }

    var leftHeight = node.height(node.left);
    var rightHeight = node.height(node.right);
    console.log(Math.max(leftHeight, rightHeight));
    return Math.max(leftHeight, rightHeight);
  },

  rebalance: function() {
    console.log('rebalance ran');
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
