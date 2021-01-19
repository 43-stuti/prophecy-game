class Narrationscene{
  constructor() {
    //this.img = loadImage('assets/gameover.png');
    this.scene = 1;
    this.justflipped = false;
  }
  show() {
    //tint(255,this.opacity);
     //image(this.img, this.x-200, this.y-200,400,400);
    // console.log('JUSTTT',this.justflipped,this.scene)
    if(this.justflipped) {
      setTimeout(() => { 
        this.showscene(); 
      }, 500);

    } else {
      this.showscene();
    }
  
  }
  showscene() {
    if(this.justflipped) {
      this.justflipped = false;
    }
    if(this.scene == 1) {
      textFont(myfont);
        textSize(50);
        textAlign(CENTER);
        text("Ward off bad omens that stand in your way", width/2, height/2-50);
        textFont(myfont);
        textSize(30);
        textAlign(CENTER);
        text("Know about it before it can strike you", width/2, height/2);

        textFont(myfont1);
        textSize(20);
        textAlign(CENTER);
        text("- A initiative by 'Association of techy-fortune-tellers'", width/2, height/2+130-30);
         textSize(15)
        text("Live a smarter life 🔮", width/2, height/2+170-50);

        textSize(25)
        text("Flip hand to the LEFT to turn over", width/2, height-20);
        //fill(255,69,0);
        //circle(this.x,this.y,90);
    }
    if(this.scene == 2) {
      textFont(myfont);
        textSize(50);
        textAlign(CENTER);
        text("Your performace in the game determines", width/2, height/2-50);
        textFont(myfont);
        textSize(50);
        textAlign(CENTER);
        text("what future holds for you", width/2, height/2);

        textFont(myfont1);
        textSize(20);
        textAlign(CENTER);
        text("Fight fire and jump over hurdles to shape a more favourable prediction", width/2, height/2+130-30);
         textSize(15)

        textSize(25)
        text("Flip hand to the LEFT to turn over", width/2, height-20);
        //fill(255,69,0);
        //circle(this.x,this.y,90);
    }
    if(this.scene == 3) {
      textFont(myfont);
        textSize(50);
        textAlign(CENTER);
        text("How to navigate", width/2, height/2-50);
        textFont(myfont);

        
        textSize(27);
        textAlign(CENTER);
        text("- Blow into your hand to fight fire", width/2, height/2+130-70);
        text("- Tilt hand up and down to bypass the hurdles", width/2, height/2+130-20);
      textFont(myfont1);
        textSize(25)
        text("To get started, make a wish and blow into your hand", width/2, height-20);
        //fill(255,69,0);
        //circle(this.x,this.y,90);
      if(this.scene == 3 && ((airblow > 590 && airblow < 1024) || (airblow > -1 && airblow < 490 ))) {
      narration = false;
      showgame = true
    }
    }
  }
  flipscene() {
    if(this.scene < 3) {
      this.scene ++;
      this.justflipped = true;
    }
    if(this.scene == 3) {
      console.log('AIR BLOW')
    }
    if(this.scene == 3 && ((airblow > 590 && airblow < 1024) || (airblow > -1 && airblow < 490 ))) {
      narration = false;
      showgame = true
    }
  }
}