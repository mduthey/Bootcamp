/*
 *  Practice
 *  1. Create a Movie object
 */

function Movie() {
  this.attvalues = {};
}

Movie.prototype.play = function() {
  console.log('Play');
  return this;
};

Movie.prototype.stop = function() {
  console.log('Stop');
  return this;
};

Movie.prototype.set = function(attr, value){
  this.attvalues[attr] = value;
  return this;
};

Movie.prototype.get = function(attr){
  return this.attvalues[attr];
};