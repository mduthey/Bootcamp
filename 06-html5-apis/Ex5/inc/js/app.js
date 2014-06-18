var myCanvas = $('.paint_area')[0];

var width = myCanvas.width;
var height = myCanvas.height;
var cntext = myCanvas.getContext("2d");
for(var i=0; i < 10; i++){
  cntext.fillStyle = getRandomColor();
  if(getRandom(2) < 1){
    cntext.fillRect(getRandom(width), getRandom(height), getRandom(100), getRandom(100));
  }else{
    cntext.strokeRect(getRandom(width), getRandom(height), getRandom(100), getRandom(100));
  }
  cntext.beginPath();
  cntext.fillStyle = getRandomColor();
  cntext.arc(getRandom(width), getRandom(height), getRandom(15), 0, 2*Math.PI);
  if(getRandom(2) < 1){
    cntext.fill();
  }else{
    cntext.stroke();
  }


  cntext.moveTo(getRandom(width), getRandom(height));
  cntext.lineTo(getRandom(width), getRandom(height));
  cntext.stroke();
}

function getRandomColor() {
  var letters = '0123456789ABCDEF'.split('');
  var color = '#';
  for (var i = 0; i < 6; i++ ) {
      color += letters[Math.floor(Math.random() * 15)];
  }
  return color;
}

function getRandom(max){
  return Math.floor(Math.random() * max);
}