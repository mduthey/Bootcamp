var myCanvas = $('.paint_area')[0];

var width = myCanvas.width;
var height = myCanvas.height;

var widthBox = 30;
var x = 0;
var y = height/2- widthBox/2;
var speed = 1;

var changeColor=0;

function animate(){
  reqAnimFrame = requestAnimationFrame;

  reqAnimFrame(animate);
  x += speed;

  if( x <= 0 || x >= (width - widthBox)){
    speed = -speed;
  }

  draw();
}
var ctx = myCanvas.getContext("2d");
function draw(){
  console.log('Draw');

  changeColor++;
  if(changeColor == 10){
    ctx.fillStyle = getRandomColor();
    changeColor=0;
  }
  ctx.clearRect(0,0, width, height);
  ctx.fillRect(x, y, widthBox, widthBox);
}

function getRandomColor() {
  var letters = '0123456789ABCDEF'.split('');
  var color = '#';
  for (var i = 0; i < 6; i++ ) {
      color += letters[Math.floor(Math.random() * 15)];
  }
  return color;
}

animate();