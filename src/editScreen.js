import Component from "./component";



export default class EditScreen {

    constructor(canvas, ctx, dimensions) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.dimensions = dimensions;

        this.mousePos = new Component("7px", "Consolas", "white", 250, 5, this.ctx, "text");
        this.firstClick = [0,0]
        this.secondClick = [0,0]
        this.clickDiff = [0,0]
        this.clickNum = 1;

        this.drawDummy = false;
        this.firstImagePos = 0;
        this.imagesArr = this.loadAllImages();

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
        this.newClick = new Component("7px", "Consolas", this.colors[Math.floor(this.mouseClicksArr.length/3)], 250, (this.mouseClickPosIncrement + 6*this.mouseClicksArr.length), this.ctx, "text");
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


    saveClicks(gx, gy) {
        if (this.clickNum === 1) {
            this.drawDummy = true;
            // this.drawDummy = false;
            this.secondClick = [0,0]
            this.clickDiff = [0,0]
            this.firstClick = [gx.toFixed()/4, gy.toFixed()/4]
            this.createMouseClick();
            this.mouseClickXYArr.push([gx.toFixed()/4, gy.toFixed()/4])  
            this.clickNum++
        } else {
            this.secondClick = [gx.toFixed()/4, gy.toFixed()/4]
            this.createMouseClick();
            this.mouseClickXYArr.push([gx.toFixed()/4, gy.toFixed()/4])
            this.clickNum--
            this.clickDiff = [Math.abs(this.secondClick[0] - this.firstClick[0]), Math.abs(this.secondClick[1] - this.firstClick[1])]
            this.createMouseClick();
            this.mouseClickXYArr.push(this.clickDiff)
            if (this.firstClick[0] !== this.secondClick[0] && this.firstClick[1] !== this.secondClick[1]) { 
                this.createDummyComponent()
                this.drawDummy = true; 
            } else {
                this.imageFound = false;
                this.imageSelectorWasClicked = this.imageSelectorClicked();
                this.dummyImageWasClicked = this.dummyImageClicked();
                if (this.imageSelectorWasClicked === false && this.dummyImageWasClicked === false) {
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

    dummyImageClicked() {
        for (let i = this.dummyImageArr.length - 1; i > 0; i--) {
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
        if (this.imageSelection === undefined) {
            this.dummy = new Component(this.clickDiff[0], this.clickDiff[1], "red", this.firstClick[0], this.firstClick[1], this.ctx, "other");
        } else {
            this.dummy = new Component(this.clickDiff[0], this.clickDiff[1], this.imageSelection.color, this.firstClick[0], this.firstClick[1], this.ctx, "image");
        }
        this.dummyImageArr.push(this.dummy)
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
        if (this.drawDummy) { 
            this.drawDummyComponent(); 
            this.drawMouseClicksComponent()
        }
        for (let i = 0; i < this.imagesArr.length; i++) {
            this.imagesArr[i].update();
        }
        this.mousePos.text = `${gx.toFixed()/4}, ${gy.toFixed()/4}`
        this.mousePos.update();
    }







}