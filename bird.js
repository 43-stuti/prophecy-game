class Bird {
    constructor(x,y,r) {
        this.r = r;
        this.x = x;
        this.y = y;
        this.gravity = 0.006;
        this.velocity = 0;
        this.lift = -1.2;
        this.drag = 1.3;
        this.img = loadImage('assets/ball.png');
    }
    show() {
      fill(255);
      image(this.img,this.x,this.y,this.r,this.r);
    }
    update() {
      this.velocity += this.gravity;
      this.y += this.velocity;
      if(this.y > height-this.r) {
        this.y = height-this.r;
        this.velocity = 0;
      }
      if(this.y < this.r) {
        this.y = this.r;
        this.velocity = 0;
      }
      //console.log('UPDATE',this.velocity,this.y)
    }
    up(mag) {
      console.log('UPPP',mag)
      this.velocity += this.lift*mag;
    }
  down(mag) {
    console.log('down',mag)
    this.velocity += this.drag*mag;
  }
} 