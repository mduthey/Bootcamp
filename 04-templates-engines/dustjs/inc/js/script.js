$(document).ready(function(){
  $.getJSON('profile.json', function(data){
    var compiled = dust.compile($("#profile-template").html(), "profile");
    dust.loadSource(compiled);

    dust.render("profile", data, function(err, out) {
      $(".profile-container").html(out);
    });
  });
});