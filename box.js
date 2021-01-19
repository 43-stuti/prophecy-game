class Box {
    constructor(x,y,w,h,id) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.id = id;
    }
    show(updateX) {
        
        if(updateX) {
            this.x = updateX;
        }
        fill(127, 113, 168);
        noStroke()
        rect(this.x,this.y,this.w,this.h);
        this.checkCollision();
        this.checkSceneChange()
    }
    checkCollision() {
        if((this.x+20  <= player.x && player.x < (this.x + this.w +20)) && (this.y <= player.y && player.y < (this.y + this.h))) {
            console.log('GOTACHAAA',this.id);
          showgame = false;
          gameover = true;
        }
    }
    checkSceneChange() {
      if((this.x+20 < player.x && player.x < (this.x + this.w)) 
         && ((this.y + this.h +1) < player.y && player.y < (this.y + this.h + 70) && boxData[this.id] && boxData[this.id].toscene) 
        ) {
            currentScene = boxData[this.id].toscene;
        
      }
    }
} 