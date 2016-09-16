

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  if (this._storage.getTableLength() >= this._limit / 2) {

    console.log(this._storage.getTableLength(), "getTableLength", this._limit, "this.limit");
    this._limit *= 2;

    console.log(this._limit, "after");
  }
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(index, v, k);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  return this._storage.get(index, k);
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.each((ele, ind, arr) => {
    if (ind === index) {
      delete arr[index][k];
    }
  });
  if (this._storage.getTableLength() <= this._limit / 2){
    this._limit /= 2;
  }
};




/*
 * Complexity: What is the time complexity of the above functions?
 */
