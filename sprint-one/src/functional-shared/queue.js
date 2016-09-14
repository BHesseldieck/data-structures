var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  //debugger;
  var newObj = {};
  newObj.length = 0;
  newObj.storage = {};
  return _.extend(newObj, queueMethods);
};

var queueMethods = {
  size: function() {
    return this.length;
  },
  enqueue: function(val) {
    this.storage[this.length] = val;
    this.length++;
  },
  dequeue: function() {
    if (this.length > 0) {
      this.length--;
    }
    var result = this.storage[0];
    for (var i = 0; i < this.length; i++) {
      this.storage[i] = this.storage[i + 1];
    }
    delete this.storage[this.length];
    return result;
  }

};


