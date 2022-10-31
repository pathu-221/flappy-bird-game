class Bird{

  constructor(x, y, r){
    this.x = x;
    this.y = y;
    this.r = r;
    this.fell = false;
    this.angle = 0;
    this.gravity = 0.6;
    this.velocity = 0.2;
    this.launch = 9;
    this.bird = loadImage('img/bird.png');
    this.bird.crossOrigin = 'Anonymous';
  }

  jump(){
    this.velocity = 0;
    this.velocity -= this.launch;
  }


  update(){
    this.y += this.velocity;
    this.velocity += this.gravity;

    if(this.y + 35 >= g.y){
      this.gravity = 0;
      this.velocity = 0;
      gOver = true;
    }
    if(this.velocity < 0){
      this.angle = - 1;
    }
    if(this.angle < 1.5){
      this.angle += 0.1;
    }
  }

  fall(){
    if(this.y - 20>= g.y){
      this.velocity = 0;
      this.gravity = 0;
      this.fell = true;
      this.y = g.y;
    }

  }

  draw(){

    push();
    fill(255);
    translate(this.x, this.y);
    rotate(this.angle);
    imageMode(CENTER);
    image(this.bird, 0, 0, 40, 40);
    pop();
  }

}
