$(document).ready(function(){
  $.getJSON('profile.json', function(data){
    var result = _.template($("#profile-template").html(), data);
    $(".profile-container").html(result);
  });
});