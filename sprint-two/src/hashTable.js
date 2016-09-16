var HashTable = function(limit) {
  this._limit = limit || 8;
  this._counter = 0;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  if (this._counter >= this._limit * .75) {
    // need to call rehash, which creates a new hash table with a doubled limit
    this.rehash();
  }

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
  if (this._counter <= this._limit * .25) {
    // need to call rehash, which creates a new hash table with a halved limit
    this.rehash();
  }

  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.each((ele, ind, arr) => {
    if (ind === index) {
      arr[index] = undefined;
    }
  });
  this._counter--;
};

HashTable.prototype.rehash = function () {
  var newLimit;

  if (this._counter >= this._limit * .75) {
    newLimit = this._limit * 2;
  } else if (this._counter <= this._limit * .25) {
    newLimit = this._limit / 2;
  }
  console.log(newLimit, "newLimit")
  this._limit = newLimit;

  var tempStorage = this._storage;

  this._storage = LimitedArray(newLimit);


  tempStorage.each(item => {
    
    if (item !== undefined) {
      item.forEach(pair => {
        this.insert(pair[0], pair[1]);
      });
    }

  });
  
};



/*
 * Complexity: What is the time complexity of the above functions?
 */