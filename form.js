class Form {
    constructor(){
        this.title = createElement('h1');
        this.button = createButton("PLAY");
    }

    display(){
        background("blue");

        this.title.html("MiJuego");
        this.title.position(displayWidth/2-50,0);

        this.button.position(displayWidth/2,displayHeight/2);
        this.button.mousePressed(()=>{
            this.title.hide();
            this.button.hide();

            gameState = "play";
        })
    }
}
