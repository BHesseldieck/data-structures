var HashTable = function() {
  this._limit = 8;
  this._counter = 0;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  


  
  var index = getIndexBelowMaxForKey(k, this._limit);
  var increment = true;

  if (Array.isArray(this.retrieveIndex(k))) {
    var array = this.retrieveIndex(k);


    if (this.retrieve(k)) {
      increment = false;

      array.forEach(function(el, idx, arr) {
        if (el[0] === k) {
          array[idx][1] = v;
        }
      });

    } else {
      array.push([k, v]);

    }
  }


  increment ? this._counter++ : null;
  console.log(this._counter);

  this._storage.set(index, array || [[k, v]]);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  
  var result;

  if (this._storage.get(index) !== undefined) {
    this._storage.get(index)
      .forEach(subArray => subArray[0] === k ? result = subArray[1] : null);
  }

  return result;

};

HashTable.prototype.retrieveIndex = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  return this._storage.get(index, k);
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.each((ele, ind, arr) => {
    if (ind === index) {
      arr[index] = undefined;
    }
  });
};



/*
 * Complexity: What is the time complexity of the above functions?
 */