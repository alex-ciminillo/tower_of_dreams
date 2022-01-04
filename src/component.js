
export default class Component {

    constructor(width, height, color, x, y, ctx, type, row, column, frameWidth, frameHeight) {
        this.width = width;
        this.type = type;
        this.height = height;
        this.speedX = 0;
        this.speedY = 0;    
        this.x = x;
        this.y = y;
        this.color = color;
        this.ctx = ctx;
        this.row = row;
        this.column = column;
        this.frameWidth = frameWidth;
        this.frameHeight = frameHeight;
        this.direction = "right";
        this.moving = false;
    }


    update = (a) => {
        if (this.type === "text") {
            this.ctx.font = this.width + " " + this.height;
            this.ctx.fillStyle = this.color;
            this.ctx.fillText(this.text, this.x, this.y);
        } else if (this.type === "image" || this.type === "background") {
            this.image = new Image();
            this.image.src = this.color;
            this.ctx.drawImage(this.image,
                this.x,
                this.y,
                this.width, this.height);
                if (this.type === "background") {
                    this.ctx.drawImage(this.image, this.x + this.width, this.y, this.width, this.height);
                }
        } else if (this.type === "sprite") {
            this.image = new Image();
            this.image.src = this.color;
            this.ctx.drawImage(this.image,
            this.column * this.frameWidth, this.row * this.frameHeight, 
            this.frameWidth, this.frameHeight, this.x, this.y, 
            this.width, this.height);
        } else {
            if (this.color === "invisible") {
                this.ctx.fillStyle = 'rgba(0,0,0,0)'
            } else if (this.color === "transparent") {
                this.ctx.fillStyle = 'rgba(255,255,255, 0.1)'
            } else if (this.color === "transparent2") {
                this.ctx.fillStyle = 'rgba(255,255,255, 0.4)'
            } else {
                this.ctx.fillStyle = this.color;
                this.ctx.lineWidth = 5;
                this.ctx.strokeStyle = "black";
                this.ctx.fill();
                this.ctx.stroke();
            }
            
            this.ctx.fillRect(this.x, this.y, this.width, this.height);
        }
   }

    newPos = (a) => {
        this.x += this.speedX;
        this.y += this.speedY;  
        if (this.type === "background") {
            if (this.x === -(this.width)) {
                this.x = 0;
            }
        }      
    }  

    clicked = (gx, gy) => {
        var myleft = this.x * 4;
        var myright = this.x * 4 + (this.width * 4);
        var mytop = this.y * 4;
        var mybottom = this.y * 4 + (this.height * 4);
        var clicked = true;
        if ((mybottom < gy) || (mytop > gy) || (myright < gx) || (myleft > gx)) {
            clicked = false;
        }
        return clicked;
    }

    intersecting = (object) => {
        var myleft = Number(this.x);
        var myright = Number(this.x) + (this.width);
        var mytop = Number(this.y);
        var mybottom = Number(this.y) + (this.height);
        var otherleft = Number(object.x);
        var otherright = Number(object.x) + (object.width);
        var othertop = Number(object.y);
        var otherbottom = Number(object.y) + (object.height);
        var intersect = true;
        if ((mybottom < othertop) ||
        (mytop > otherbottom) ||
        (myright < otherleft) ||
        (myleft > otherright)) {
            intersect = false;
        }
        return intersect;
    }
    

    dir = (gx, gy) => {
        var myleft = this.x * 4;
        var myright = this.x * 4 + (this.width * 4);
        if (gx < myleft + (this.width * 4)/2) {
            return "left"
        } else {
            return "right"
        }
    }

    checkIfStillMoving(clickx, clicky) {
        if (this.directionOfClick === "left" && this.x > clickx/4 - this.width/2) {
            
        } else if (this.directionOfClick === "right" && this.x < clickx/4 - this.width/2) {
            
        } else if (this.directionOfClickUp === "up" && this.y > clicky/4 - this.height/2) {
            
        } else if (this.directionOfClickUp === "down" && this.y < clicky/4 - this.height/2) {
            
        } else {
            this.speedX = 0;
            this.speedY = 0;
        }
        
    }

    startNewAnime(newAnime, nextAnime, playNum) {
        this.frame = 0;
        this.anime = newAnime;
        this.firstAnimation = true;
        this.nextAnime = nextAnime;
        this.playNum = playNum;
    }

    startNewCustomAnime(newAnimeArr, nextAnime, speed) {
        this.frame = 0;
        this.customArr = newAnimeArr;
        this.firstAnimation = true;
        this.nextAnime = nextAnime;
        this.speed = speed;
        this.customAnimation = true;
    }

    customAnime(arr) {
        this.customArr = arr
        if (this.firstAnimation === true) { 
            this.row = this.customArr[0][0];
            this.column = this.customArr[0][1];
            this.customArr = this.customArr.slice(1)
            this.firstAnimation = false;
        }
        if (this.frame >= this.speed) {
            if (this.customArr.length === 0) {
                this.customAnimation = false;
                this.anime = this.nextAnime;
                this.frame = 0;
                this.firstAnimation = true;
                return;
            }
            this.row = this.customArr[0][0];
            this.column = this.customArr[0][1];
            this.customArr = this.customArr.slice(1)
            this.frame = 0;
              
        }
    }

    spriteAnimation(start, stop, speed, row, colDir) {
        if (this.firstAnimation === true) { 
            this.row = row;
            this.column = start;
            this.firstAnimation = false;
        }
        if (this.frame >= speed) {
            if (this.column === stop - colDir + colDir && this.row === row) {
                this.playNum -= 1;
                if (this.pause !== true) {
                    if (this.playNum === 0) {
                        this.playNum -= 1;
                        this.anime = this.nextAnime;
                        this.firstAnimation = true;
                        this.frame = 0;
                        return;
                    }
                    
                        this.column = start - colDir;
                        this.row = row;
                } else {
                    this.stop = true;
                    return;
                }
                
            } else if (this.row > row) {
                if (this.column === stop - colDir - this.columnLength) {
                    this.playNum -= 1;
                    if (this.pause !== true) {
                        if (this.playNum === 0) {
                            this.playNum -= 1;
                            this.anime = this.nextAnime;
                            this.firstAnimation = true;
                            this.frame = 0;
                            return;
                        }
                        
                            this.column = start - colDir;
                            this.row = row;
                    } else {
                        this.stop = true;
                        return;
                    }
                    
                }
            } else if (this.column === this.columnLength) {
                this.row += 1;
                this.column = -1;
            }
            this.column += colDir;
            this.frame = 0;
        }
        
    }


    moveToMouse = (gx, gy, speed) => {
        this.moving = true;
        let xspeed = Math.abs((this.x - (gx/4 - this.width/2)) * speed);
        let yspeed = Math.abs((this.y - (gy/4 - this.height/2)) * speed);
        
        xspeed > yspeed ? speed = xspeed : speed = yspeed;

        if (this.x > gx/4 - this.width/2) {
            this.directionOfClick = "left"
            this.speedX = -(this.x - (gx/4 - this.width/2))/speed;
            
        } else {
            this.directionOfClick = "right"
            this.speedX = -(this.x - (gx/4 - this.width/2))/speed;
        }
        if (this.y > gy/4 - this.height/2) {
            this.directionOfClickUp = "up"
            this.speedY = -(this.y - (gy/4 - this.height/2))/speed;
        } else {
            this.directionOfClickUp = "down"
            this.speedY = -(this.y - (gy/4 - this.height/2))/speed;
        }
    }


}


