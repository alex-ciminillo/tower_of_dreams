
export default class Component {

    constructor(width, height, color, x, y, ctx, type) {
        this.width = width;
        this.type = type;
        this.height = height;
        this.speedX = 0;
        this.speedY = 0;    
        this.x = x;
        this.y = y;
        this.color = color;
        this.ctx = ctx;
    }


    update = (a) => {
        if (this.type == "text") {
            this.ctx.font = this.width + " " + this.height;
            this.ctx.fillStyle = this.color;
            this.ctx.fillText(this.text, this.x, this.y);
        } else if (this.type == "image") {
            this.image = new Image();
            this.image.src = this.color;
            this.ctx.drawImage(this.image,
                this.x,
                this.y,
                this.width, this.height);
        } else {
            this.ctx.fillStyle = this.color;
            this.ctx.fillRect(this.x, this.y, this.width, this.height);
        }
   }

    newPos = (a) => {
        this.x += this.speedX;
        this.y += this.speedY;        
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
        console.log(`${mytop},${mybottom},${myleft},${myright}`)
        console.log(`${gx},${gy}`)
        return clicked;
    }


}


