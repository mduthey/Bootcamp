define(function(){
  //Constructor
  var Director = function(directorName) {
    name = directorName;
  }

  //Private
  var name = '',
      quotes = [];

  //Public
  Director.prototype = {
    speak: function(){
      return name+" says: "+quotes.join('; ');
    },
    get: function(attr){
      if(attr == 'name')
        return name;
      else
        return quotes;
    },
    set: function(attr, values){
      if(attr == 'quotes')
        quotes = quotes.concat(values);
      return this;
    }
  };

  return Director;
});
