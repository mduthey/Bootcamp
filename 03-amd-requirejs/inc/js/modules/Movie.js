define(['./Director'], function(){
  //Constructor
  var Movie = function() {

  }

  //Private
  var attvalues = {};

  //Public
  Movie.prototype = {
    play: function() {
      console.log(this.get('title') + ' now playing');
      return this;
    },
    stop: function() {
      console.log(this.get('title') + ' now stopped');
      return this;
    },
    set: function(attr, value) {
      attvalues[attr] = value;
      return this;
    },
    get: function(attr) {
      return attvalues[attr];
    }
  };

  return Movie;

});
