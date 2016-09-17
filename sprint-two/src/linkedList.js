var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    
    if (list.head === null && list.tail === null) {
      list.head = Node(value);
      list.tail = Node(value);
    } else {
      var lastNode;

      var findLastNode = function(node) {
        if (node.next !== null) {
          findLastNode(node.next);
        } else {
          lastNode = node;
        } 
      };

      findLastNode(list.head);
      
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

  list.removeNode = function(value) {

    var findNode = function(node) {
      if (node.next === null) {
        throw Error ('The value does not exist in the LinkedList');
      } else if (node.next.value === value ) {
        node.next = node.next.next;
      } else {
        findNode(node.next);
      }
    };
    findNode(list.head); 
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
 O(n) -- because worst case is recursing through the entire linked list
 */

// list = {
//   head: {
//     value 5
//     next = {
//       value 6
//       next = {
//         value 7
//         next = null
//       }
//     }
//   }
//   tail: {
//     value
//     next = null
//   }
// }
































