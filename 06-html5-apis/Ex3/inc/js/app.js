var $dropbox = $('.dropbox'),
    $databox = $('.databox');

$.event.props.push( "dataTransfer" );

$dropbox.bind("dragenter", function(e){
  e.preventDefault();
});

$dropbox.bind("dragleave", function(e){
  e.preventDefault();
});

$dropbox.bind("dragover", function(e){
  e.preventDefault();
});

$dropbox.bind("drop", function(e){
  e.preventDefault();
  var files = e.dataTransfer.files;
  $databox.html('');
  for(var i=0; i < files.length; i++){
    var reader = new FileReader();
    reader.fileName = files[i].name
    reader.readAsText(files[i]);
    reader.onloadend = function(e){
      $databox.append("File: "+e.target.fileName+"<br>Content: "+e.target.result+"<br><br>");
    };
  }
});
