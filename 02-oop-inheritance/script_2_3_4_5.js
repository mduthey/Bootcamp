/*
 *  Practice
 *  2. Add a MovieObserver class that listens for "playing" and “stopped” events.
 *  3. Publish "playing" event on Movie.play(). KEY POINT
 *  4. Publish "stopped" event on Movie.stop(). KEY POINT
 *  5. Log to console when each event is fired.
 */
 

function Movie() {
  this.attvalues = {};
  this.observers = [];
}

Movie.prototype.play = function() {
  this.notify('playing'); // Key point 3
  return this;
};

Movie.prototype.stop = function() {
  this.notify('stopped'); // Key point 4
  return this;
};

Movie.prototype.set = function(attr, value){
  this.attvalues[attr] = value;
  return this;
};

Movie.prototype.get = function(attr){
  return this.attvalues[attr];
};

Movie.prototype.addSubscriber = function(observer){
  this.observers.push(observer);
}

Movie.prototype.removeSubscriber = function(observer){
  var index = this.observers.indexOf(observer);
  if(index >= 0)
    this.observers.splice(index, 1);
}

Movie.prototype.notify = function(action){
  for(var i=0; i < this.observers.length; i++){
    (this.observers[i]).update(action, this.get('title'));
  }
}

var MovieObserver = {
  update: function(action, title){
    console.log(title+' now '+action);
  }
}
