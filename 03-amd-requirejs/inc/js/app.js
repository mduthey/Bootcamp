require.config({
  paths: {
    jquery: './vendor/jquery-1.11.1.min'
  }
});

require(['./modules/Movie', './modules/Director', 'jquery'],function(Movie, Director, $){
  var jossWhedon = new Director('Joss Whedon');
  jossWhedon.set('quotes', ['Loneliness is about the scariest thing out there.', 
                            'Who is to say who is the villain and who is the hero? Probably the dictionary.', 
                            'Always be yourself... unless you suck.', 
                            'Absolutely eat dessert first. The thing that you want to do the most, do that.', 
                            'I kept telling my mom that reading comic books would pay off.'
                            ]
                );
  var theAvengers = new Movie();
  theAvengers.set('title', 'The Avengers')
             .set('year', 2012)
             .set('director', jossWhedon)
             .set('ratings','8.2/10')
             .set('genere',['Action','Adventure','Sci-Fi']);

  console.log(theAvengers.get('director').speak());
  $(document).ready(function(){
    $('button').click(function(){
      var listQuotes = theAvengers.get('director').get('quotes');
      $('.quotes').html('<li>'+listQuotes.join('</li><li>')+'</li>').slideDown(1000);
    });
  });

});
