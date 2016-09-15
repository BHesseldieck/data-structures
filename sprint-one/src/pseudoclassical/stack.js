var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.counter = 0;
};

Stack.prototype.size = function () {
  return this.counter;
};

Stack.prototype.push = function (val) {
  this[this.counter] = val;
  this.counter++;
};

Stack.prototype.pop = function () {
  if (this.counter > 0) {
    this.counter--;
  }

  var result = this[this.counter];

  delete this[this.counter];

  return result;
};

