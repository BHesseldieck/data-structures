var DoublyLinkedList = function() {
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
      
      lastNode.next = Node(value, lastNode);

      list.tail = Node(value, lastNode);

    }
  };

  list.removeHead = function(hi) {
    var result = list.head.value;

    if (list.head.next !== null) {
      list.head = list.head.next;
      list.head.previous = null;
    } else {
      list.head = null;
      list.tail = null;
    }

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
        node.next.previous = node;
      } else {
        findNode(node.next);
      }
    };
    findNode(list.head); 
  };

  list.addToHead = function(value) {
    if (list.head !== null) {
      var oldHead = list.head;
      // create a new head
      list.head = Node(value);
      // set new head's pointer ot the old head object
      list.head.next = oldHead;
      // update the previous property of the old head
      list.head.next.previous = list.head;

    } else {
      list.addToTail(value);
    }

  };

  list.removeTail = function() {
    var result = list.tail;
    list.tail = list.tail.previous;
    list.tail.next = null;
    return result;
  };

  return list;
};

var Node = function(value, previous) {
  var node = {};

  node.value = value;
  node.previous = previous || null;
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
//     previous null
//     next = {
//       value 6
//       previous {5, previous, next}
//       next = {
//         value 7
//         previous {6, previous, next}
//         next = null
//       }
//     }
//   }
//   tail: {
//     value
//     previous {7, previous, next}
//     next = null
//   }
// }
































