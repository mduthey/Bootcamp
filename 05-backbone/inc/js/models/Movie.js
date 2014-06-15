define(['backbone'], function(Backbone){
  var Movie = Backbone.Model.extend({
    defaults: {
      'title': 'Title',
      'year': 0    
    },
    initialize: function(){

    },
    play: function(){
      console.log('Playing: '+this.get('title'));
    },
    stop: function(){
      console.log('Stopped: '+this.get('title'));
    }
  });
  return Movie;
});
