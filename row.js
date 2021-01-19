
class Row {
    constructor(index,x) {
        this.row = rowData[index];
        this.x = x;
        this.index = index;
        this.boxes = [];
        this.boxPlacement = 10;
        for(let i=0;i< this.row.boxes.length; i++) {
            let boxID = this.row.boxes[i];
            let boxX = x;
            let boxY;
            boxY = this.boxPlacement;
            this.boxPlacement = boxY + boxData[this.row.boxes[i]].height + 90;
            
            let boxW = 40;
            let boxH = boxData[this.row.boxes[i]].height;
            this.boxes.push(new Box(boxX,boxY,boxW,boxH,boxID));
        }
    }
    show(newX) {
        for(let i=0;i< this.row.boxes.length; i++) {
            this.boxes[i].show(newX);
        }
    }
} 