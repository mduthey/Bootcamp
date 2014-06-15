define(['backbone'], function(Backbone){
  var AppView = Backbone.View.extend({
    el: $('#show-movies'),

    events: {
      "click button.create": "createNewMovie",
      "click button.reset": "resetFormMovie"
    },

    initialize: function(MovieList, MovieView){
      this.movieList = MovieList;
      this.movieView = MovieView;

      this.listenTo(this.movieList, 'add', this.addOne);
      this.listenTo(this.movieList, 'reset', this.addAll);

      this.movieList.fetch();

      this.movieForm = {
        poster: this.$('#new-movie-poster'),
        title: this.$('#new-movie-title'),
        year: this.$('#new-movie-year'),
        genres: this.$('#new-movie-genres'),
        director: this.$('#new-movie-director'),
        synopsis: this.$('#new-movie-synopsis'),
        isEmpty: function(){
          return (!this.poster.val() || !this.title.val() || !this.year.val() || !this.genres.val() || !this.director.val() || !this.synopsis.val());
        },
        toJSON: function(){
          return {
            poster: this.poster.val(),
            title: this.title.val(),
            year: this.year.val(),
            genres: this.genres.val().split(','),
            director: this.director.val(),
            synopsis: this.synopsis.val()
          }
        },
        clearForm: function(){
          this.poster.val('');
          this.title.val('');
          this.year.val('');
          this.genres.val('');
          this.director.val('');
          this.synopsis.val('');
        }
      };

    },

    addOne: function(movie){
      var view = new this.movieView({model: movie});
      this.$el.append(view.render().el);
    },

    addAll: function(){
      (this.movieList).each(this.addOne, this);
    },

    createNewMovie: function(){
      if(this.movieForm.isEmpty())
        return;
      else{
        this.movieList.create(this.movieForm.toJSON());
        this.movieForm.clearForm();
      }
    },

    resetFormMovie: function(){
      this.movieForm.clearForm();
    }

  });

  return AppView;
});
