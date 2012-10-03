if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(fn, arr) {
        return fn.apply(null, arr);
    },

    speak : function(fn, obj) {
        return fn.call(obj)
    },

    functionFunction : function(str) {
      return function(arg) {
        return str + ', ' + arg;
      };
    },

    makeClosures : function(arr, fn) {
      var someFuncs = [];

      arr.forEach(function (item) {
        var _fn = function () { 
          var x = item;
          return fn(x); 
        }
        someFuncs.push(_fn);
      });

      return someFuncs;
    },

    partial : function(fn, str1, str2) {
      var slice = Array.prototype.slice
        , args = slice.call(arguments, 1);

      return function () {
        return fn.apply(this, args.concat(slice.call(arguments, 0)));
      }
    },

    useArguments : function() {
      var memo = 0
        , i = 0
        , l = arguments.length;

      for (; i < l; i++) {
        memo += arguments[i];
      }

      return memo;
    },

    callIt : function(fn) {
      return fn.apply(this, Array.prototype.slice.call(arguments, 1));
    },

    curryIt : function(fn) {
      var slice = Array.prototype.slice
        , stored_args = slice.call(arguments, 1);
      return function () {
        var new_args = slice.call(arguments)
          , args = stored_args.concat(new_args);
        return fn.apply(null, args);
      }
    }
  };
});
