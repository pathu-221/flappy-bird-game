
var bground;
var g;
var b;
var p = [];
var interval = 200;
var speed = 3;
var score = 0;
var font;
var gOver;


function setup(){
  const width = window.innerWidth < 600 ? window.innerWidth * 0.96 : 600;
  createCanvas(width, window.innerHeight * 0.95);
  font = loadFont('Font/birdFont.otf');
  restart();
  textFont(font);
  textSize(50);
  textAlign(CENTER);
  bground = loadImage('img/background.png');
}

function draw(){
  background(bground);
//  g.update();
  for(var i = p.length - 1;i >= 0;i--){
    p[i].draw();
    p[i].update();
  }
  b.draw();
  b.update();
  g.show();
  g.update();
  showScore();
  addPipes();
  gameover();
}


function gameover(){
  if(gOver){
    speed = 0;
    b.fall();
    push();
    stroke(255);
    strokeWeight(5);
    translate(width/2, height/2);
    textSize(100);
    text('Game Over', 0, 0);
    pop();
    fill('#F1A04C');
    text('Click to restart', width/2, height/2 + 50);
  }
}

function showScore(){
  var show = 'Score ' + score;
  fill('#F1A04C');
  stroke(255);
  strokeWeight(5);
  text(show, width/2, 40);
}

function mousePressed(){
    if(!gOver){
      b.jump();
    }
    else {
      location.reload(true);
    }
}

function restart(){

  b = new Bird(50, height/2, 20);
  //p.push(new pipe(width - 50));
  g = new ground();
  gOver = false;
}

