class Firescene {
  constructor(widthR,sceneObj) {
    this.widthR = widthR;
    this.fireArray = [];
    this.deleteRows = [];
    this.availablespace = width;
    this.speed = 3;
    this.lastcreated = 0;
    this.rowWidth = 80
    this.sceneObj = sceneObj;
    this.unburnt = 0;
  }
  update() {
    this.makeFire();
    this.shiftFire();
    this.destroyFire();
    this.removeFire();
    this.showRows();
  }
  makeFire() {
    while(this.availablespace > 0 && this.lastcreated < this.widthR){
      let firecount = floor(random(4,5));
      let newObj = {} 
      newObj.fires = new Firerow(width-this.availablespace + 70,firecount,this.rowWidth);
      newObj.x = width-this.availablespace;
      newObj.destructionLevel = 0;
      this.fireArray.push(newObj);
      this.lastcreated ++;
      this.availablespace = width - this.fireArray.length*this.rowWidth;
    }
  }
  shiftFire() {
    if(this.fireArray && this.fireArray.length) {
      for(let i=0;i<this.fireArray.length;i++) {
        let newX = this.fireArray[i].x - this.speed;
        if(newX < 150) {
          this.deleteRows.push(i);
        } else {
          this.fireArray[i].x = newX;
        }
      }
    }
  }
  destroyFire() {
    //destroy fire based on pressure intensity
    let destroyCount = 0;
    if((airblow > 590 && airblow < 800) || (airblow > 50 && airblow < 490 )) {
      destroyCount = 2;
    } // intensity condition 1 
    if((airblow > 800 && airblow < 1024) || (airblow > -1 && airblow < 50 )) {
      destroyCount = 3;
    }
    for(let i=0;i<destroyCount;i++) {
      
      if(this.fireArray && this.fireArray[i] && this.fireArray[i].destructionLevel == 0) {
        //changeopacity to (40%);
        this.fireArray[i].fires.changeopacity(100);
        
      }
      if(this.fireArray && this.fireArray[i] && this.fireArray[i].destructionLevel == 1) {
        //changeopacity to (100%)
        this.fireArray[i].fires.changeopacity(200);
        
      }
       if(this.fireArray && this.fireArray[i] && this.fireArray[i].destructionLevel == 2)      {
          this.deleteRows.push(i);
        }
      if(this.fireArray && this.fireArray[i]) {
        this.fireArray[i].destructionLevel ++;
      }
    }
    killfire = false;
    killfireagain = false;
  }
  
  removeFire() {
    if(this.deleteRows && this.deleteRows.length) {
      for(let i=0;i<this.deleteRows.length;i++) {
        if(this.fireArray[i] && this.fireArray[i].destructionLevel == 0) {
          this.unburnt ++;
        }
        this.fireArray.splice(i,1);
      }
      if(this.fireArray && !this.fireArray.length) {
        if(this.unburnt > 10) {
          showgame = false;
          gameover = true;
        } else {
          currentScene = this.sceneObj.toscene;
        }
      }
      this.deleteRows =[];
    }
  }
  showRows() {
    if(this.fireArray) {
      for(let i=0;i<this.fireArray.length;i++) {
        this.fireArray[i].fires.show(this.fireArray[i].x);
      }
    }
  }
}