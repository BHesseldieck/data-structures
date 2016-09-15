var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    
    if (list.head === null && list.tail === null) {
      list.head = Node(value);
      list.tail = Node(value);
    } else {

      var findLastNode = function(node) {
      
        if (node.next !== null) {
          findLastNode(node.next);
        } else {
          return node;
        } 
      };

      var lastNode = findLastNode(list.head);

      lastNode.next = Node(value);

      list.tail = Node(value);

    }
  };

  list.removeHead = function() {
    var result = list.head.value;
    list.head = list.head.next;
    return result;
  };

  list.contains = function(target) {
    var searchNodes = function(node) {
      if (node.value === target) {
        return true;
      } else if (node.next !== null) {
        return searchNodes(node.next);
      }

      return false;
    };


    var result = searchNodes(list.head);
    return result;

  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

// list = {
//   head: {
//     value
//     next = {
//       value
//       next = {
//         value
//         next = null
//       }
//     }
//   }
//   tail: {
//     value
//     next = null
//   }
// }
































