/*
 *  Practice
 *  6. Refactor Movie class as a Module keeping your previous code for reference.
 *  7. Create a DownloadableMovie that extends from Movie adding a download method.
 *  8. Create a mixin object called Social with the methods: share(friendName) and like().
 *  9. Apply the mixin to Movie object and play with the console output.
 *  10. Create an Actor class and create some actors from one of your favorite movies.
 *
 *  11. Show how you would add an array of actors to a Movie object.
 *  var m = new Movie(),
 *      actor1 = new Actor(),
 *      actor2 = new Actor(),
 *      actor3 = new Actor();
 * 
 *  m.set('actors', [actor1, actor2, actor3]);
 */

var Movie = (function () {
  // Constructor
  var Movie = function (){

  };

  //Private
  var attvalues = {},
      observers = [];

  var notify = function(action, movie){
    for(var i=0; i < observers.length; i++){
      (observers[i]).update(action, movie.get('title'));
    }
  };

  //Public
  Movie.prototype = {
    play: function() {
      notify('playing', this);
      return this;
    },
    stop: function() {
      notify('stopped', this);
      return this;
    },
    set: function(attr, value) {
      attvalues[attr] = value;
      return this;
    },
    get: function(attr){
      return attvalues[attr];
    },
    addSubscriber: function(observer){
      observers.push(observer);
      return this;
    },
    removeSubscriber: function(observer){
      var index = observers.indexOf(observer);
      if(index >= 0)
        observers.splice(index, 1);
      return this;
    }
  }

  return Movie;
  
})();

var MovieObserver = {
  update: function(action, title){
    console.log(title+' now '+action);
  }
};

function DownloadableMovie() {
};

DownloadableMovie.prototype = new Movie();

DownloadableMovie.prototype.download = function() {
  console.log(this.get('title') + ' downloading...');
};

var Social = {
  share: function(friendName) {
    console.log('Shared '+this.get('title')+' with '+friendName);
  },
  like: function() {
    console.log('Like +1');
  }
};

function extend(destination, source) {
  for (var k in source) {
    if (source.hasOwnProperty(k)) {
      destination[k] = source[k];
    }
  }
  return destination; 
};

function Actor(){
  this.attvalues = {};
};

Actor.prototype.set = function(attr, value){
  this.attvalues[attr] = value;
  return this;
};

Actor.prototype.get = function(attr){
  return this.attvalues[attr];
};
