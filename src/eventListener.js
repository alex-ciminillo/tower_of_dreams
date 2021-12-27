

export default class EventListener {

    constructor(canvas, ctx, dimensions) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.dimensions = dimensions;

    }


    updateGxGy(e) {
        let rect = this.canvas.getBoundingClientRect();
        this.gx = (e.clientX - rect.left) / (rect.right - rect.left) * this.canvas.width;
        this.gy =  (e.clientY - rect.top) / (rect.bottom - rect.top) * this.canvas.height;
        return [this.gx, this.gy]
    }









}