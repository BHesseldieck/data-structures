var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    if (list.head === null && list.tail === null) {
      list.head = Node(value);
      list.tail = Node(value);
    } else {
      var addToLastNode = function addToLastNode(node){
        if(node.next === null){
          node.next = Node(value);
        } else {
          addToLastNode(node.next);
        }
      };
      addToLastNode(list.head);
      list.tail = Node(value);
    }

  };

  list.removeHead = function() {
    var result = list.head.value;
    list.head = list.head.next;
    return result;
  };

  list.contains = function(target) {
    var found = false;
    var findTarget = function findTarget (listItem) {
      if(listItem.value === target) {
        found = true;
      } else if (listItem.next !== null) {
        findTarget(listItem.next);
      }
    };
    findTarget(list.head);
    return found;
  };

  list.removeNode = function(val) {

    var findNode = function findNode(node) {
      if(node.next.value === val) {
        if (node.next.next === null) {
          node.next = null;
          list.tail = node;
        } else {
          node.next = node.next.next;
        }
      } else if (node.next !== null) {
        findNode(node.next);
      } else {
        throw new Error ('Value does not exist in List');
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

// /*
//  * Complexity: What is the time complexity of the above functions?
//  O(n) -- because worst case is recursing through the entire linked list
//  */

// // list = {
// //   head: {
// //     value 5
// //     next = {
// //       value 6
// //       next = {
// //         value 7
// //         next = null
// //       }
// //     }
// //   }
// //   tail: {
// //     value
// //     next = null
// //   }
// // }
































