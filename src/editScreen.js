import { update } from "lodash";
import Component from "./component";



export default class EditScreen {

    constructor(canvas, ctx, dimensions) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.dimensions = dimensions;
        this.groupingImages = false;
        this.mousePos = new Component("7px", "Consolas", "white", 245, 5, this.ctx, "text");
        this.largeSelectionBox = new Component(0, 0, "transparent2", 0, 0, this.ctx, "other");
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
        this.currentlySelectedArr = [];
        this.selectionCoverComponentsArr = [];
        this.allSelectionStaticInfoArr = [];
        this.largestTop = 0;
        this.largestBottom = 0;
        this.largestRight = 0;
        this.largestLeft = 0;
        this.testSelection = new Component(0, 0, "transparent2", 0, 0, this.ctx, "other");
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
            if (this.groupingImages === false) { this.temp = true; }
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
            if (this.firstClick[0] !== this.secondClick[0] && this.firstClick[1] !== this.secondClick[1] && this.moveImage === false && this.groupingImages === false) { 
                
                this.makingImage = true;
                this.createDummyComponent()
                this.drawDummy = true; 
            } else {
                this.makingImage = false;
                this.imageFound = false;
                this.imageSelectorWasClicked = this.imageSelectorClicked();
                if (this.moveImage === false) { this.dummyImageWasClicked = this.dummyImageClicked(); }
                if (this.imageSelectorWasClicked === false && this.dummyImageWasClicked === false && this.moveImage === false && this.groupingImages === false) {
                    if (this.changingAllImage === true) {
                        this.currentlySelectedArr = [];
                        this.selectionCoverComponentsArr = [];
                        this.changingAllImage = false;
                    } else {
                        this.drawDummy = false;
                        this.imageSelection = undefined;
                        this.dummyImageArr = [];
                        this.mouseClicksArr = [];
                        this.mouseClickXYArr = [];
                        this.mouseClickPosIncrement = 11;
                    }
                    
                }
                this.removeMouseClicksPos(this.dummyImageArr.length) 
            }
            this.groupingImages = false;
            if (this.currentlySelectedArr.length > 0) {
                this.changingAllImage = true;
            }
        }
        this.checkIfEditingImage(e);
        this.checkIfGroupingImages(e);
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
        if (this.changingAllImage === true) {
            console.log("helllo")
            for (let i = 0; i < this.currentlySelectedArr.length; i++) {
                this.currentlySelectedArr[i].x = this.gx/4 - Math.abs(this.gxNow/4 - this.allSelectionStaticInfoArr[i*4]);
                this.currentlySelectedArr[i].y = this.gy/4 - Math.abs(this.gyNow/4 - this.allSelectionStaticInfoArr[i*4 + 1]);
                this.selectionCoverComponentsArr[i].x = this.gx/4 - Math.abs(this.gxNow/4 - this.allSelectionStaticInfoArr[i*4]);
                this.selectionCoverComponentsArr[i].y = this.gy/4 - Math.abs(this.gyNow/4 - this.allSelectionStaticInfoArr[i*4 + 1]);
            }
        } else {
            this.testSelection.x = this.gx/4 - Math.abs(this.gxNow/4 - this.testSelectionX);
            this.testSelection.y = this.gy/4 - Math.abs(this.gyNow/4 - this.testSelectionY);
        }
        
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
        this.createStaticInfoForSelections();
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
        this.imageClicked = this.wasDummyImageClicked();
        if (this.imageClicked === true) {
            this.wasDummyImage = true;
        } else if (e.type === "mousedown" && this.imageClicked === false) {
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
        if (this.imageClicked === true) {
            let x = this.gx;
            let y = this.gy;
            setTimeout(() => {
                if (x === this.gx && y === this.gy && this.e.type === "mousedown") {
                    this.temp = false;
                    if (this.changingAllImage === true) {
                        this.moveImage = true;
                        this.chooseDir = true;
                    } else {
                        this.testSelectionX = this.testSelection.x ;
                        this.testSelectionY = this.testSelection.y;
                        this.testSelectionWidth = this.testSelection.width;
                        this.testSelectionHeight = this.testSelection.height;
                        this.gxNow = this.gx;
                        this.gyNow = this.gy;
                        this.moveImage = true;
                        this.chooseDir = true;
                    }
                    
                    
                }
            }, 250)
        }
    }

    createStaticInfoForSelections() {
        this.allSelectionStaticInfoArr = [];
        for (let i = 0; i < this.currentlySelectedArr.length; i++) {
            this.allSelectionStaticInfoArr.push(this.currentlySelectedArr[i].x);
            this.allSelectionStaticInfoArr.push(this.currentlySelectedArr[i].y);
            this.allSelectionStaticInfoArr.push(this.currentlySelectedArr[i].width);
            this.allSelectionStaticInfoArr.push(this.currentlySelectedArr[i].height);
        }
        this.gxNow = this.gx;
        this.gyNow = this.gy;
    }

    checkIfGroupingImages(e) {
        if (this.imageClicked === false) {
            let x = this.gx;
            let y = this.gy;
            setTimeout(() => {
                
                if (x === this.gx && y === this.gy && this.e.type === "mousedown") {
                    this.groupingImages = true;
                    this.temp = false;
                }
            }, 250)
        } 
    }

    checkIfImagesAreInSelection(tempComponent) {
        for (let i = 0; i < this.dummyImageArr.length; i++) {
                this.intersection = this.dummyImageArr[i].intersecting(tempComponent)
                if (this.intersection === true) { 
                    let l = this.currentlySelectedArr.indexOf(this.dummyImageArr[i])
                    if (l === -1) {
                        this.createSelectionCoverComponent(this.dummyImageArr[i])
                    } 
                    l = this.currentlySelectedArr.indexOf(this.dummyImageArr[i])
                    this.drawAllSelectionsBoxes(l); 
                } 
            if (this.intersection === false) {
                if (this.currentlySelectedArr.indexOf(this.dummyImageArr[i]) > -1) {
                    let k = this.currentlySelectedArr.indexOf(this.dummyImageArr[i])
                    this.currentlySelectedArr.splice(k, 1)
                    this.selectionCoverComponentsArr.splice(k, 1)
                } 
            }
        }
        
    }

    calculateLargestTopBottomLeftRight(selection, i) {
        selection.x = Number(selection.x)
        selection.y = Number(selection.y)
        selection.width = Number(selection.width)
        selection.height = Number(selection.height)
        if (i === 0) {
            this.largestBottom = selection.y + selection.height;
            this.largestTop = this.largestTop = selection.y;
            this.largestRight = selection.x + selection.width;
            this.largestLeft = selection.x;
        }
        if (selection.x < this.largestLeft) { this.largestLeft = selection.x; }
        if (selection.x + selection.width > this.largestRight) { this.largestRight = selection.x + selection.width; }
        if (selection.y < this.largestTop) { this.largestTop = selection.y; }
        if (selection.y + selection.height > this.largestBottom) { this.largestBottom = selection.y + selection.height; }
    }

    drawAllSelectionsBoxes(l) {
        if (typeof l === 'string') {
            for (let i = 0; i < this.selectionCoverComponentsArr.length; i++) {
                this.selectionCoverComponentsArr[i].update();
                this.calculateLargestTopBottomLeftRight(this.selectionCoverComponentsArr[i], i);
            }
            this.largeSelectionBox.x = this.largestLeft;
            this.largeSelectionBox.width = Math.abs(this.largestRight - this.largestLeft)
            this.largeSelectionBox.y = this.largestTop;
            this.largeSelectionBox.height = Math.abs(this.largestTop - this.largestBottom)
            this.testSelection = this.largeSelectionBox;
            this.testSelectionX = this.testSelection.x ;
            this.testSelectionY = this.testSelection.y;
            this.testSelectionWidth = this.testSelection.width;
            this.testSelectionHeight = this.testSelection.height;
            this.testSelection.update();
        } else {
            this.selectionCoverComponentsArr[l].update();
        }
        
    }

    createSelectionCoverComponent(selection) {
        let tempComponent = new Component(selection.width, selection.height, "transparent2", selection.x, selection.y, this.ctx, "other");
        this.selectionCoverComponentsArr.push(tempComponent);
        this.currentlySelectedArr.push(selection);
    }

    drawGroupImageSelector(gx, gy) {
        let tempComponent = new Component(Math.abs(this.firstClick[0] - gx/4), Math.abs(this.firstClick[1] - gy/4), "transparent", this.firstClick[0], this.firstClick[1], this.ctx, "other");
        tempComponent.update();
        this.checkIfImagesAreInSelection(tempComponent);
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
                if (this.changingAllImage === false) { this.testSelection = this.dummyImageArr[i] }
                return true;
            }
        }
        return this.testSelection.clicked(this.gx, this.gy)
        
    }

    dummyImageClicked() {
        for (let i = this.dummyImageArr.length - 1; i > -1; i--) {
            if (this.dummyImageArr[i].clicked(this.gx, this.gy) && this.groupingImages === false) {
                this.removeMouseClicksPos(i)
                if (this.changingAllImage === true && this.currentlySelectedArr.includes(this.dummyImageArr[i])) {
                    this.removeImageFromSelection(this.dummyImageArr[i])
                } else {
                    this.dummyImageArr.splice(i, 1)
                }
                
                return true;
            }
        }
        return false;
    }

    removeImageFromSelection(selection) {
        let i = this.currentlySelectedArr.indexOf(selection)
        this.currentlySelectedArr.splice(i)
        this.selectionCoverComponentsArr.splice(i)
        if (this.currentlySelectedArr.length < 1) { this.changingAllImage = false; }
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
        if (this.temp === true) { 
            this.createDummyComponent();
            this.drawTempDummy(); 
        }
        if (this.groupingImages === true) { this.drawGroupImageSelector(gx, gy); }
        if (this.changingAllImage === true) { this.drawAllSelectionsBoxes("all"); }
        this.mousePos.text = `${(gx/4).toFixed(2)}, ${(gy/4).toFixed(2)}`
        this.mousePos.update();
    }







}