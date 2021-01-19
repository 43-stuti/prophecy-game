class Scene {
    constructor(sceneObj) {
        this.sceneObj = sceneObj;
        this.visibleRows = [];
        this.removedindex = [];
        this.lastRow = 0;
        this.availablespace = width;
        this.speed = 4;
        this.lastCreated = 0;
        this.fireScene = {};
        //createRows();
        //showRows();
        if(this.sceneObj && this.sceneObj.isFire) {
          let width = floor(random(20,30));// upto 5 rows of fire 
          this.fireScene = new Firescene(width,this.sceneObj);
        }
    }
    show() {
      if(this.sceneObj && !this.sceneObj.isFire) {
        this.shiftRows();
        this.removeRows();
        this.createRows();
        this.showRows();
      } else if(this.sceneObj && this.sceneObj.isFire){
        this.fireScene.update();
      }
      
    }
    createRows() {
        //let length = this.visibleRows.length;
        //let nextIndex = Math.abs(length-1);
        while(this.availablespace && this.sceneObj.rows[this.lastCreated]) {
            this.visibleRows.push(new Row(this.lastCreated+1,width-this.availablespace + 600));
            this.availablespace = this.availablespace - 500; //we shall see
            this.lastCreated ++;
        }
    }
    shiftRows() {
        if(this.visibleRows && this.visibleRows.length) {
            for(let i=0;i<this.visibleRows.length; i++) {
                let newX = this.visibleRows[i].x - this.speed;
                if((newX - 10) < 0) {
                    this.removedindex.push(i)
                } else {
                    this.visibleRows[i].x = newX;
                }
            }
        }
    }
    removeRows() {
        if(this.removedindex.length) {
            for(let i=0;i<this.removedindex.length;i++) {
                this.visibleRows.splice(i,1);
            }
            this.removedindex = [];
        }
    }
    showRows() {
        for(let i=0;i<this.visibleRows.length;i++) {
            this.visibleRows[i].show(this.visibleRows[i].x);
          //add overlay
        }
    }
} 