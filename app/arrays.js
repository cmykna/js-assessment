if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  if ( !Array.prototype.forEach ) {
    Array.prototype.forEach = function(fn, scope) {
      for(var i = 0, len = this.length; i < len; ++i) {
        fn.call(scope || this, this[i], i, this);
      }
    }
  }

  if ( ! Array.prototype.indexOf ) {
    Array.prototype.indexOf = function (arr, item) {
      var i = 0, l = arr.length;
      for (; i <= l; i++) {
          if (arr[i] === item) {
              return i;
          }
      }
      return -1;
    }
  }

  return {
    indexOf : function(arr, item) {
      return arr.indexOf(item);
    },

    sum : function(arr) {
        var memo = 0;
        arr.forEach(function(item) {
          memo += item;
        });
        return memo;
    },

    remove : function(arr, item) {
      arr.forEach(function (element, index) {
        if (element === item) {
          arr.splice(index, 1);
        }
      });
      return arr;
    },
    
    removeWithoutCopy : function(arr, item) {
      var orig_arr = arr;
      this.remove(arr, item);
      return orig_arr;
    },

    append : function(arr, item) {
      arr.push(item);
      return arr;
    },

    truncate : function(arr) {
      arr.pop();
      return arr;
    },

    concat : function(arr1, arr2) {
      return arr1.concat(arr2);
    },

    insert : function(arr, item, index) {
      arr.splice(index, 0, item);
      return arr;
    },

    count : function(arr, item) {
      var count = 0;
      arr.forEach(function (element) {
        if (element === item) count++;
      })
      return count;
    },

    duplicates : function(arr) {
      var dupes = [];
      arr.forEach(function (element, index) {
        if (this.count(arr, element) > 1 && this.count(dupes, element) === 0) {
          dupes.push(element)
        }
      }, this);
      return dupes;
    },

    square : function(arr) {
      var squared = [];
      arr.forEach(function (element) {
        squared.push(Math.pow(element, 2));
      });
      return squared;
    },

    findAllOccurrences : function(arr, target) {
      var result = [];
      arr.forEach(function (element, idx) {
        if (element === target) {
          result.push(idx);
        }
      });
      return result;
    }
  };
});
