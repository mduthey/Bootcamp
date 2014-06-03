function inputError($input){
  $input
    .animate({
      "margin-left": "5px"
    }, 50)
    .animate({
      "margin-left": "-5px"
    }, 50)
    .animate({
      "margin-left": "5px"
    }, 50)
    .animate({
      "margin-left": "-5px"
    }, 50)
    .animate({
      "margin-left": "0"
    }, 50);
}

function highlight(name, text){
  return text.replace(name, '<span class="highlight">'+name+'</span>');
}

$(document).ready(function(){
  var $section = $('section.hidden'),
      $button = $($section[0]).find('button'),
      $inputName = $($section[0]).find('input.alias'),
      $labResponse = $($section[0]).find('.response'),
      $sectionTweets = $('.tweets');

  $section.fadeIn(1000, function(){
    $inputName.focus();
  });
  $button.click(function(){
    if($inputName.val()){
      var url = 'http://bootcamp.aws.af.cm/welcome/' + $inputName.val();
      //var url = 'http://localhost:8023/';
      $.getJSON(url, function(data){
          $labResponse
            .removeClass('error')
            .html(highlight($inputName.val(), data.response));
        })
        .fail(function(data){
          $labResponse
            .addClass('error')
            .text('ERROR ! !')
        });
    }else{
      inputError($inputName);
    }
  });

  showTweets($sectionTweets);
});


function showTweets($section){
  var url = 'http://tweetproxy.ap01.aws.af.cm/search?callback=?',
      params = { q: 'html5' };
  $.getJSON(url, params, function(data){
    console.log(data);
  }).done(function(data){
      $.each(data.statuses, function(i, tweet){
        var $article = $('<article class="tweet"></article>'),
            $header = $('<header></header>'),
            $paragraph = $('<p></p>'),
            $footer = $('<footer></footer>');

        $header.html('<img src="'+tweet.user.profile_image_url+'">'+tweet.user.name);
        $paragraph.text(tweet.text);
        $footer.text(tweet.created_at);
        $article
          .append($header)
          .append($paragraph)
          .append($footer);
        $section.append($article);
      })
    });
}
