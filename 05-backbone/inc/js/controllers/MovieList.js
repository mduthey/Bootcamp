define(['backbone','model/Movie', 'backbone.localstorage'], function(Backbone, Movie){
  var MovieList = Backbone.Collection.extend({
    model: Movie,
    localStorage: new Backbone.LocalStorage("movies-backbone")
  });
  return MovieList;
});
