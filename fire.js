class Fire{
  constructor(x,y,size) {
    this.x = x;
    this.y = y;
    this.size = 3*size;
    this.opacity = 0;
    this.fire = loadImage('assets/fire.png');
  }
  show(updateX) {
    if(updateX) {
      this.x = this.x + updateX;
    }
    //tint(255,this.opacity);
    image(this.fire, this.x, this.y, 1.5*this.size, this.size);
    fill(82, 25, 153,this.opacity);
    noStroke();
    rect(this.x,this.y,this.size,this.size);
  }
  changeopacity(mag) {
    this.opacity = mag;
  }
}