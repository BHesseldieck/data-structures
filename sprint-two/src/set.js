var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if (typeof item !== 'string'){
    item = JSON.stringify(item);
  }
  this._storage[item] = true;
};

setPrototype.contains = function(item) {
  if (typeof item !== 'string'){
    item = JSON.stringify(item);
  }
  return this._storage[item] === true;
};

setPrototype.remove = function(item) {
  if (typeof item !== 'string'){
    item = JSON.stringify(item);
  }
  delete this._storage[item];
};

/*
 * Complexity: What is the time complexity of the above functions?
 * Constant complexity -> O(1)
 */
