class pipe{

  constructor(x){
    this.x = x;
    this.gap = 150
    this.scoreAdded = false;
    this.width = 60;
    this.offscreen = false;
    this.height = random(this.gap, height - this.gap);
    this.top = loadImage('img/pipeTop.png')
    this.bottom = loadImage('img/pipeBottom.png');
    this.top.crossOrigin = 'Anonymous';
    this.bottom.crossOrigin = 'Anonymous';
    console.log(this.top);
  }

  update(){

    this.x -= speed;

    if(this.x + this.width < 0){
      this.offscreen = true;
    }

    if(b.y - 20 <= this.height - this.gap/2 || b.y + 20 >= this.height + this.gap/2){
      if(b.x + 20 >= this.x && b.x - 20 <= this.x + this.width){
        g.panspeed = 0;
        gOver = true;
      }
    }

    if(this.x + this.width < b.x ){
      if(!this.scoreAdded){
        this.scoreAdded = true;
        score++;
      }
    }
  }


  draw(){
    //fill('red');
    //rect(this.x, 0, 40, this.height - this.gap/2);
    image(this.top, this.x, 0, this.width, this.height - this.gap/2);
    //rect(this.x, this.height + this.gap/2, 40, height);
    image(this.bottom, this.x, this.height + this.gap/2, this.width, height);
  }
}

function addPipes(){
  if(frameCount % 70 == 0){
    //p.push(new pipe(p[p.length - 1].x + interval));
    p.push(new pipe(width));
  }

  for(var i = 0;i < p.length;i++){
    if(p[i].offscreen){
      p.splice(0, 1);
    }
  }
//  console.log(p.length);
}
