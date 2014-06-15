require.config({
  baseUrl: './inc/js/vendor/',
  paths: {
    'model': '../models/',
    'controller': '../controllers/',
    'view': '../views/'
  },
  shim: {
    'backbone': {
      deps: ['jquery', 'underscore'],
      exports: 'Backbone'
    }
  }
});

require(['controller/MovieList', 'view/MovieView', 'view/AppView'], function(MovieList, MovieView, AppView){
  var movieList = new MovieList();

  var app = new AppView(movieList, MovieView);

  //If it is the first execution of the code, create a base with the movies
  if(typeof(localStorage['movies-backbone']) == 'undefined'){
    $.getJSON('movies.json', function(data){
      $.each(data.movies, function(index, value){
        movieList.create(value);
      });
    });
  }
});