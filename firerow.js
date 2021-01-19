class Firerow {
  constructor(x,count,rowWidth) {
    this.x = x;
    this.count = count;
    this.rowWidth = rowWidth;
    this.fireblocks = [];
    for(let i=0;i<count;i++) {
      let fireX = this.x;
      let fireY = random(0,height);
      let size = random(20,30)
      this.fireblocks[i] = new Fire(fireX,fireY,size);
    }
  }
  show(newX) {
    let diff = newX - this.x;
    this.x = newX;
    for(let i=0;i<this.fireblocks.length;i++) {
      this.fireblocks[i].show(diff);
    }
  }
  changeopacity(mag) {
    for(let i=0;i<this.count;i++) {
      this.fireblocks[i].changeopacity(mag)
    }
  }
}