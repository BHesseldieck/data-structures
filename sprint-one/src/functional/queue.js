var Queue = function() {
  var someInstance = {};
  var length = 0;
  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[length] = value;
    length++;
  };

  someInstance.dequeue = function() {
    if (length > 0) {
      length--;
    }
    var result = storage[0];
    for (var key in storage) {
      storage[Number(key) - 1] = storage[key];
    }
    delete storage[length];
    return result;
  };

  someInstance.size = function() {
    return length;
  };

  return someInstance;
};
