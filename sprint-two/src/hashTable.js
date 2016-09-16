var HashTable = function() {
  this._limit = 8;
  this._counter = 0;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v, reHashing) {

  this.rehash(reHashing);

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
  
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.each((ele, ind, arr) => {
    if (ind === index) {
      delete arr[index];
    }
  });
  this._counter--;
  this.rehash();
};

HashTable.prototype.rehash = function (reHashing) {
  var newLimit = undefined;
  if (reHashing === undefined) {
    if (this._counter >= this._limit * .75) {
      newLimit = this._limit * 2;
    } else if (this._counter <= this._limit * .25 && this._limit > 8) {
      newLimit = this._limit / 2;
    }
  }


  if (newLimit !== undefined) {
    // console.log("im reHashing");
    this._counter = 0;
    this._limit = newLimit;


    var tempStorage = this._storage;

    this._storage = LimitedArray(newLimit);

    tempStorage.each((item, i, a) => {
      // console.log(a, i, "im old");

      if (item !== undefined) {
        item.forEach(pair => {
          this.insert(pair[0], pair[1], true);
        });
      }
    });

    // this._storage.each((e, i, arr) => {
    //   console.log(arr, i, "im new");
    // })
    
  }

  
};



/*
 * Complexity: What is the time complexity of the above functions?
 */