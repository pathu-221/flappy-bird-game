class ground{

  constructor(){
    this.x = 0;
    this.height = 30;
    this.width = 30;
    this.panspeed = 1;
    this.y = height - this.height;
    this.ground = loadImage('img/ground.png');
    this.ground.crossOrign = 'Anonymous';
    this.xoffset = 0;
  }

  show(){
    fill(255);
    for(var i = this.xoffset;i <= width;i += this.width){
      image(this.ground, i, this.y, this.width, this.height);
    }
  }

  update(){
    this.xoffset -= this.panspeed;
    if(this.xoffset <= -this.ground.width){
      this.xoffset = 0;
    }
  }
}
