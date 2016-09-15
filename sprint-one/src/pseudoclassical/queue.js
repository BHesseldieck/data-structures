var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.length = 0;
};

Queue.prototype.size = function() {
  return this.length;
};

Queue.prototype.enqueue = function(val) {
  this[this.length] = val;
  this.length++;
};

Queue.prototype.dequeue = function() {
  if (this.length > 0) {
    this.length--;
  }
  var result = this[0];
  for (var i = 0; i < this.length; i++) {
    this[this.length - 1] = this[this.length];
  }
  delete this[this.length];
  return result;
};


