

export default class EventListener {

    constructor(canvas, ctx, dimensions, canvas2) {
        this.canvas = canvas;
        this.canvas2 = canvas2;
        this.ctx = ctx;
        this.dimensions = dimensions;

    }


    updateGxGy(e) {
        let rect = this.canvas.getBoundingClientRect();
        this.gx = (e.clientX - rect.left) / (rect.right - rect.left) * this.canvas.width;
        this.gy =  (e.clientY - rect.top) / (rect.bottom - rect.top) * this.canvas.height;
        return [this.gx, this.gy]
    }
    updateGxGy2(e) {
        let rect = this.canvas2.getBoundingClientRect();
        let gx = (e.clientX - rect.left) / (rect.right - rect.left) * this.canvas2.width;
        let gy =  (e.clientY - rect.top) / (rect.bottom - rect.top) * this.canvas2.height;
        return [gx, gy]
    }









}