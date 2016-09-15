var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newObj = Object.create(queueMethods);
  return newObj;

};

var queueMethods = {
  length: 0,
  size: function () {
    return this.length;
  },
  enqueue: function (val) {
    this[this.length] = val;
    this.length++;
  },
  dequeue: function () {
    if (this.length > 0) {
      this.length--;
    }

    var result = this[0];

    for (var i = 0; i < this.length; i++) {
      this[this.length - 1] = this[this.length];
    }

    delete this[this.length];

    return result;
  } 
};


