import Component from "./component";



export default class EditScreen {

    constructor(canvas, ctx, dimensions) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.dimensions = dimensions;

        this.mousePos = new Component("7px", "Consolas", "white", 245, 5, this.ctx, "text");
        this.firstClick = [0,0]
        this.secondClick = [0,0]
        this.clickDiff = [0,0]
        this.clickNum = 1;
        this.moveImage = false;
        this.drawDummy = false;
        this.firstImagePos = 0;
        this.imagesArr = this.loadAllImages();
        this.tempDummyArr = [];
        this.dummyImageArr = [];
        this.mouseClicksArr = [];
        this.mouseClickXYArr = [];
        this.mouseClickPosIncrement = 11;

        this.colors = ["white", "blue", "yellow", "green", "red", "orange", "purple", "cyan"]
    }

    images () {
        const path = require.context("./../images", false, /\.png$/)
        return path.keys().map(path)
    }

    createMouseClick() {
        this.newClick = new Component("7px", "Consolas", this.colors[Math.floor(this.mouseClicksArr.length/3)], 245, (this.mouseClickPosIncrement + 6*this.mouseClicksArr.length), this.ctx, "text");
        this.mouseClicksArr.push(this.newClick)
    }


    loadAllImages() {
        let images = this.images();
        let imageArr = []
        for (let i = 0; i < images.length; i++) {
            imageArr.push(new Component(20, 5, images[i], 0, this.firstImagePos, this.ctx, "image"));
            this.firstImagePos += 5;
        }
        return imageArr
    }


    saveClicks(gx, gy, e) {
        if (this.clickNum === 1) {
            this.temp = true;
            this.drawDummy = true;
            // this.drawDummy = false;
            this.secondClick = [0,0]
            this.clickDiff = [0,0]
            this.firstClick = [(gx/4).toFixed(2), (gy/4).toFixed(2)]
            
            this.createMouseClick();
            this.mouseClickXYArr.push([(gx/4).toFixed(2), (gy/4).toFixed(2)])  
            this.clickNum++
        } else {
            this.temp = false;
            this.tempDummyArr = [];
            this.secondClick = [(gx/4).toFixed(2), (gy/4).toFixed(2)]
            this.createMouseClick();
            this.mouseClickXYArr.push([(gx/4).toFixed(2), (gy/4).toFixed(2)])
            this.clickNum--
            this.clickDiff = [Math.abs(this.secondClick[0] - this.firstClick[0]).toFixed(2), Math.abs(this.secondClick[1] - this.firstClick[1]).toFixed(2)]
            this.createMouseClick();
            this.mouseClickXYArr.push(this.clickDiff)
            if (this.firstClick[0] !== this.secondClick[0] && this.firstClick[1] !== this.secondClick[1] && this.moveImage === false) { 
                
                this.makingImage = true;
                this.createDummyComponent()
                this.drawDummy = true; 
            } else {
                this.makingImage = false;
                this.imageFound = false;
                this.imageSelectorWasClicked = this.imageSelectorClicked();
                if (this.moveImage === false) { this.dummyImageWasClicked = this.dummyImageClicked(); }
                if (this.imageSelectorWasClicked === false && this.dummyImageWasClicked === false && this.moveImage === false) {
                    this.drawDummy = false;
                    this.imageSelection = undefined;
                    this.dummyImageArr = [];
                    this.mouseClicksArr = [];
                    this.mouseClickXYArr = [];
                    this.mouseClickPosIncrement = 11;
                }
                this.removeMouseClicksPos(this.dummyImageArr.length) 
            }
        }
        this.checkIfEditingImage(e);
    }

    redrawTopAndLeft() {
        this.testSelection.x = this.gx/4
        if (this.testSelection.x < this.testSelectionX) {
            this.testSelection.width = Math.abs(this.testSelectionWidth + Math.abs(this.testSelectionX - this.testSelection.x))
        } else {
            this.testSelection.width = Math.abs(this.testSelectionWidth - Math.abs(this.testSelectionX - this.testSelection.x))
        }

        this.testSelection.y = this.gy/4
        if (this.testSelection.y < this.testSelectionY) {
            this.testSelection.height = Math.abs(this.testSelectionHeight + Math.abs(this.testSelectionY - this.testSelection.y))
        } else {
            this.testSelection.height = Math.abs(this.testSelectionHeight - Math.abs(this.testSelectionY - this.testSelection.y))
        }
    }

    redrawBottomAndRight() {
        this.testSelection.width = Math.abs(this.testSelectionX - this.gx/4)
        this.testSelection.height = Math.abs(this.testSelectionY - this.gy/4)
        
    }

    redrawTopAndRight() {
        this.testSelection.width = Math.abs(this.testSelectionX - this.gx/4)
        this.testSelection.y = this.gy/4
        if (this.testSelection.y < this.testSelectionY) {
            this.testSelection.height = Number(this.testSelectionHeight) + Number(Math.abs(this.testSelectionY - this.gy/4));
        } else {
            this.testSelection.height = Math.abs(this.testSelectionHeight - Math.abs(this.testSelectionY - this.testSelection.y))
        }
        
    }

    redrawBottomAndLeft() {
        this.testSelection.x = this.gx/4
        if (this.testSelection.x < this.testSelectionX) {
            this.testSelection.width = Number(this.testSelectionWidth) + Number(Math.abs(this.testSelectionX - this.testSelection.x))
        } else {
            this.testSelection.width = Math.abs(this.testSelectionWidth - Math.abs(this.testSelectionX - this.testSelection.x))
        }
        this.testSelection.height = Math.abs(this.testSelectionY - this.gy/4)
    }
    
    redrawTop() {
        this.testSelection.y = this.gy/4
        if (this.testSelection.y < this.testSelectionY) {
            // this.testSelection.height = this.testSelectionHeight + Math.abs(this.testSelectionY - this.gy/4)
            this.testSelection.height = Number(this.testSelectionHeight) + Number(Math.abs(this.testSelectionY - this.gy/4));
        } else {
            this.testSelection.height = Math.abs(this.testSelectionHeight - Math.abs(this.testSelectionY - this.testSelection.y))
        }
    }

    redrawBottom() {
        this.testSelection.height = Math.abs(this.testSelectionY - this.gy/4)
    }

    redrawRight() {
        this.testSelection.width = Math.abs(this.testSelectionX - this.gx/4)
    }

    redrawLeft() {
            this.testSelection.x = this.gx/4
            if (this.testSelection.x < this.testSelectionX) {
                this.testSelection.width = Number(this.testSelectionWidth) + Number(Math.abs(this.testSelectionX - this.testSelection.x))
            } else {
                this.testSelection.width = Math.abs(this.testSelectionWidth - Math.abs(this.testSelectionX - this.testSelection.x))
            }
    }

    redrawWhole() {
        this.testSelection.x = this.gx/4 - Math.abs(this.gxNow/4 - this.testSelectionX);
        this.testSelection.y = this.gy/4 - Math.abs(this.gyNow/4 - this.testSelectionY);
    }

    drawNow() {
        if (this.redrawTopAndLeftDir === true) {
            this.redrawTopAndLeft();
        } else if (this.redrawBottomAndRightDir === true) {
            this.redrawBottomAndRight();
        } else if (this.redrawTopAndRightDir === true) {
            this.redrawTopAndRight();
        } else if (this.redrawBottomAndLeftDir === true) {
            this.redrawBottomAndLeft();
        } else if (this.redrawRightDir === true) {
            this.redrawRight();
        } else if (this.redrawLeftDir === true) {
            this.redrawLeft();
        } else if (this.redrawTopDir === true) {
            this.redrawTop();
        } else if (this.redrawBottomDir === true) {
            this.redrawBottom();
        } else if (this.redrawWholeDir === true) {
            this.redrawWhole();
        }
        let tempComponent = new Component(this.testSelection.width, this.testSelection.height, "transparent", this.testSelection.x, this.testSelection.y, this.ctx, "other");
        tempComponent.update();
    }

    redrawImage() {
        this.redrawTopAndLeftDir = false;
        this.redrawBottomAndRightDir = false;
        this.redrawTopAndRightDir = false;
        this.redrawBottomAndLeftDir = false;
        this.redrawRightDir = false;
        this.redrawLeftDir = false;
        this.redrawTopDir = false;
        this.redrawBottomDir = false;
        this.redrawWholeDir = false;

        if (this.gx/4 < this.testSelection.x + this.testSelection.width * 0.1 && this.gy/4 < this.testSelection.y + this.testSelection.height * 0.1) {
            this.redrawTopAndLeftDir = true;
            this.chooseDir = false;
        } else if (this.gx/4 > this.testSelection.x + this.testSelection.width * 0.9 && this.gy/4 > this.testSelection.y + this.testSelection.height * 0.9) {
            this.redrawBottomAndRightDir = true;
            this.chooseDir = false;
        } else if (this.gx/4 > this.testSelection.x + this.testSelection.width * 0.9 && this.gy/4 < this.testSelection.y + this.testSelection.height * 0.1) {
            this.redrawTopAndRightDir = true;
            this.chooseDir = false;
        } else if (this.gx/4 < this.testSelection.x + this.testSelection.width * 0.1 && this.gy/4 > this.testSelection.y + this.testSelection.height * 0.9) {
            this.redrawBottomAndLeftDir = true;
            this.chooseDir = false;
        } else if (this.gx/4 > this.testSelection.x + this.testSelection.width * 0.9) {
            this.redrawRightDir = true;
            this.chooseDir = false;
        } else if (this.gx/4 < this.testSelection.x + this.testSelection.width * 0.1) {
            this.redrawLeftDir = true;
            this.chooseDir = false;
        } else if (this.gy/4 < this.testSelection.y + this.testSelection.height * 0.1) {
            this.redrawTopDir = true;
            this.chooseDir = false;
        } else if (this.gy/4 > this.testSelection.y + this.testSelection.height * 0.9) {
            this.redrawBottomDir = true;
            this.chooseDir = false;
        } else {
            this.redrawWholeDir = true;
            this.chooseDir = false;
        }
    }

    checkIfEditingImage(e) {
        let imageClicked = this.wasDummyImageClicked();
        if (imageClicked === true) {
            this.wasDummyImage = true;
        } else if (e.type === "mousedown" && imageClicked === false) {
            this.wasDummyImage = false;
        }
        this.e = e;
        if (e.type === "mouseup" && this.moveImage === true) { 
            this.updateMousePosForImage() 
            this.wasEditMode = true;
        } else if (this.wasDummyImage === true) {
            this.wasEditMode = true;
        } else if (this.wasImageSelectorClicked() === true) {
            this.wasEditMode = true;
        } else if (this.makingImage === true) {
            this.wasEditMode = true;
        } else {
            this.wasEditMode = false;
        }
            
        
        this.moveImage = false; 
        if (imageClicked === true) {
            let x = this.gx;
            let y = this.gy;
            setTimeout(() => {
                if (x === this.gx && y === this.gy && this.e.type === "mousedown") {
                    this.temp = false;
                    this.testSelectionX = this.testSelection.x ;
                    this.testSelectionY = this.testSelection.y;
                    this.testSelectionWidth = this.testSelection.width;
                    this.testSelectionHeight = this.testSelection.height;
                    this.gxNow = this.gx;
                    this.gyNow = this.gy;
                    this.moveImage = true;
                    this.chooseDir = true;
                }
            }, 250)
        }
    }

    isEditMode() {
        if (this.wasEditMode === true) {
            return true;
        } else {
            return false;
        }
    }

    updateMousePosForImage() {
        let i = this.dummyImageArr.indexOf(this.testSelection)
        let width = Number(this.testSelection.width).toFixed(2);
        let height = Number(this.testSelection.height).toFixed(2);
        this.mouseClickXYArr[i*3] = [this.testSelection.x.toFixed(2), this.testSelection.y.toFixed(2)];
        let x = (Number(this.testSelection.x.toFixed(2)) + Number(width)).toFixed(2);
        let y = (Number(this.testSelection.y.toFixed(2)) + Number(height)).toFixed(2);
        this.mouseClickXYArr[i*3 + 1] = [x, y];
        this.mouseClickXYArr[i*3 + 2] = [width, height];   
    }


    imageSelectorClicked() {
        for (let i = 0; i < this.imagesArr.length; i++) {
            if (this.imagesArr[i].clicked(this.gx, this.gy)) {
                this.imageSelection = this.imagesArr[i]
                this.imageFound = true;
                return true;
            }
        }
        return false;
    }

    wasImageSelectorClicked() {
        for (let i = 0; i < this.imagesArr.length; i++) {
            if (this.imagesArr[i].clicked(this.gx, this.gy)) {
                return true;
            }
        }
        return false;
    }

    wasDummyImageClicked() {
        for (let i = this.dummyImageArr.length - 1; i > -1; i--) {
            if (this.dummyImageArr[i].clicked(this.gx, this.gy)) {
                this.testSelection = this.dummyImageArr[i]
                return true;
            }
        }
        return false;
    }

    dummyImageClicked() {
        for (let i = this.dummyImageArr.length - 1; i > -1; i--) {
            if (this.dummyImageArr[i].clicked(this.gx, this.gy)) {
                this.removeMouseClicksPos(i)
                this.dummyImageArr.splice(i, 1)
                return true;
            }
        }
        return false;
    }

    removeMouseClicksPos(i) {
        for (let j = i; j < this.dummyImageArr.length; j++) {
            this.mouseClicksArr[j*3].y -= 18;
            this.mouseClicksArr[j*3 + 1].y -= 18;
            this.mouseClicksArr[j*3 + 2].y -= 18;
            this.mouseClicksArr[j*3].color = this.colors[this.colors.indexOf(this.mouseClicksArr[j*3].color) - 1];
            this.mouseClicksArr[j*3 + 1].color = this.colors[this.colors.indexOf(this.mouseClicksArr[j*3 + 1].color) - 1];
            this.mouseClicksArr[j*3 + 2].color = this.colors[this.colors.indexOf(this.mouseClicksArr[j*3 + 2].color) - 1];
        }
        this.mouseClicksArr.splice(i*3, 3)
        this.mouseClickXYArr.splice(i*3, 3)
    }


    createDummyComponent() {
        if (this.temp === true) {
            this.clickDiff = [Math.abs(this.gx/4 - this.firstClick[0]).toFixed(2), Math.abs(this.gy/4 - this.firstClick[1]).toFixed(2)]
        }
        if (this.imageSelection === undefined) {
            this.dummy = new Component(this.clickDiff[0], this.clickDiff[1], "red", this.firstClick[0], this.firstClick[1], this.ctx, "other");
        } else {
            this.dummy = new Component(this.clickDiff[0], this.clickDiff[1], this.imageSelection.color, this.firstClick[0], this.firstClick[1], this.ctx, "image");
        }
        if (this.temp === false) {
            this.dummyImageArr.push(this.dummy)
        }
        
    }

    drawTempDummy() {
        this.dummy.update();
    }

    drawDummyComponent() {
        for (let i = 0; i < this.dummyImageArr.length; i++) {
            this.dummyImageArr[i].update();
        };
    }
    drawMouseClicksComponent() {
        for (let i = 0; i < this.dummyImageArr.length; i++) {
            this.mouseClicksArr[i*3].text = `${this.mouseClickXYArr[i*3][0]}, ${this.mouseClickXYArr[i*3][1]}`
            this.mouseClicksArr[i*3].update();
            this.mouseClicksArr[i*3 + 1].text = `${this.mouseClickXYArr[i*3 + 1][0]}, ${this.mouseClickXYArr[i*3 + 1][1]}`
            this.mouseClicksArr[i*3 + 1].update();
            this.mouseClicksArr[i*3 + 2].text = `${this.mouseClickXYArr[i*3 + 2][0]}, ${this.mouseClickXYArr[i*3 + 2][1]}`
            this.mouseClicksArr[i*3 + 2].update();
        };
    }




    animate(gx, gy) {
        this.gx = gx;
        this.gy = gy;
        if (this.temp === true) { 
            this.createDummyComponent();
            this.drawTempDummy(); 
        }
        if (this.drawDummy) { 
            this.drawDummyComponent(); 
            this.drawMouseClicksComponent();
        }
        if (this.moveImage === true) { 
            if (this.chooseDir === true) {
                this.redrawImage(); 
            } else {
                this.drawNow();
            }
                
        }
        for (let i = 0; i < this.imagesArr.length; i++) {
            this.imagesArr[i].update();
        }
        this.mousePos.text = `${(gx/4).toFixed(2)}, ${(gy/4).toFixed(2)}`
        this.mousePos.update();
    }







}