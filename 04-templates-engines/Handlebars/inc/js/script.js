$(document).ready(function(){
  $.getJSON('profile.json', function(data){
    var template = Handlebars.compile($("#profile-template").html());
    $(".profile-container").html(template(data));
  });
});