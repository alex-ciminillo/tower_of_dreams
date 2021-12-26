
export default class Sound {

    constructor(src, volume) {
        this.sound = document.createElement("audio");
        this.sound.src = src;
        this.sound.setAttribute("preload", "auto");
        this.sound.setAttribute("controls", "none");
        this.sound.style.display = "none";
        if (volume !== undefined) { this.sound.volume = volume; }
        
        document.body.appendChild(this.sound);
    }

    play = (a) => {
        this.sound.play();
    }

    stop = (a) => {
        this.sound.pause();
    } 

}