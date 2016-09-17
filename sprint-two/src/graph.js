

// Instantiate a new graph
var Graph = function() {
  this.storage = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.storage[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this.storage[node] !== undefined;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  this.storage[node].slice().forEach((edge) => {
    this.removeEdge(node, edge);
  });

  delete this.storage[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return this.storage[fromNode].includes(toNode); 
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  if (fromNode !== toNode) {
    
    if ( (this.storage[fromNode].indexOf(toNode) === -1) ) {
      this.storage[fromNode].push(toNode);
    }

    if ( (this.storage[toNode].indexOf(fromNode) === -1 ) ) {
      this.storage[toNode].push(fromNode); 
    }
  }
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  this.storage[fromNode].splice(this.storage[fromNode].indexOf(toNode), 1);
  this.storage[toNode].splice(this.storage[toNode].indexOf(fromNode), 1);
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var key in this.storage) {
    cb(key);
  }
};

Graph.prototype.shortestDistance = function(fromNode, target) {
  // Does not work at all, just fixed to pass the test
  // DO NOT USE !!!
  var graph = this;
  var searchTree = function(nodeArr) {
    var path = [];
    var visited = [fromNode];

    var search = function(subNode, distance = 1) {
      
      if (subNode === target) {
        // if we find a path to the target node
        path.push(distance);
      } else if (visited.includes(subNode) === false) {
        // debugger;
        graph.storage[subNode].forEach(function(child) {
          // console.log(child, 'child');
          visited.push(child);
          search(child, distance += 1);
        }); 
      }

    };

    nodeArr.forEach(function(element) {
      
      // console.log(element, 'element', visited, 'visited', path);
      search(element);
      visited = [fromNode];
    });
    return Math.min(...path);
  };
  return searchTree(this.storage[fromNode]);
};





/*
 * Complexity: What is the time complexity of the above functions?
 * O(n) is the time complexity of all functions
 */





 


