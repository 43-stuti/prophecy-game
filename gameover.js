class Gameover{
  constructor(x,y,condition) {
    this.x = x;
    this.y = y;
    this.imagearray = ['alcohol','blue'];
    this.imagetext = random(this.imagearray);
    this.url = 'assets/' + this.imagetext + '.png'
    this.img = loadImage(this.url);
  }
  show() {
    //tint(255,this.opacity);
    let randomi = Math.floor(random(0,this.img.length-1));
     image(this.img, this.x-200, this.y-200,400,400);
    //fill(255,69,0);
    //circle(this.x,this.y,90);
  }
}