define(['backbone'], function(Backbone){
  var MovieView = Backbone.View.extend({
    tagName: 'article',

    template: _.template($('#movie-view').html()),

    events: {
      "dblclick .movie-info": "edit",
      "click a.remove": "clear",
      "click button.save": "updateOnClick",
      "click button.cancel": "cancelUpdate"
    },

    initialize: function(){
      this.listenTo(this.model, 'change', this.render);
      this.listenTo(this.model, 'destroy', this.remove);
    },

    render: function(){
      this.$el.html(this.template(this.model.toJSON()));
      this.$el.addClass('movie');

      this.movieEdit = {
        poster: this.$('#movie-poster'),
        title: this.$('#movie-title'),
        year: this.$('#movie-year'),
        genres: this.$('#movie-genres'),
        director: this.$('#movie-director'),
        synopsis: this.$('#movie-synopsis'),
        isEmpty: function(){
          return (!this.poster.val() || !this.title.val() || !this.year.val() || !this.genres.val() || !this.director.val() || !this.synopsis.val());
        },
        allEmpty: function(){
          return (!this.poster.val() && !this.title.val() && !this.year.val() && !this.genres.val() && !this.director.val() && !this.synopsis.val());
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
        }
      };
      return this;
    },

    clear: function(){
      this.model.destroy();
    },

    edit: function(){
      this.$el.addClass("editing");
    },

    updateOnClick: function(){
      if(this.movieEdit.allEmpty()){
        this.clear();
        return;
      }
      if(this.movieEdit.isEmpty())
        return;
      this.model.save(this.movieEdit.toJSON());
      this.$el.removeClass('editing');
    },

    cancelUpdate: function(){
      this.$el.removeClass('editing');
    }

  });
  return MovieView;
});
