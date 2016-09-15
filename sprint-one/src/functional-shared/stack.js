var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newObj = {};
  return _.extend(newObj, stackMethods);
};

var stackMethods = {
  counter: 0,
  size: function () {
    return this.counter;
  },
  push: function (val) {
    this[this.counter] = val;
    this.counter++;
  },
  pop: function () {
    if (this.counter > 0) {
      this.counter--;
    }

    var result = this[this.counter];

    delete this[this.counter];

    return result;

  }

};