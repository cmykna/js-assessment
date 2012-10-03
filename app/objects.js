if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    alterContext : function(fn, obj) {
    	obj.fn = fn;
      return obj.fn();
    },

    alterObjects : function(constructor, greeting) {
      constructor.prototype.greeting = greeting;
    },

    iterate : function(obj) {
      var prop, results = [];
      for (prop in obj) {
        if (obj.hasOwnProperty(prop)) {
          results.push(prop + ": " + obj[prop]);
        }
      }
      return results;
    }
  };
});
