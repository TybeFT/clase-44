var wall1;
var player;
var gameState = "serve";
var form, game;

function preload() {

}

function setup() {
    createCanvas(displayWidth, displayHeight);
    form = new Form();
    game = new Game();
}

function draw() {
    background("skyblue");
    
    if (gameState == "serve") {
        form.display();
    }else if (gameState == "play"){
        game.display();
    }

    drawSprites();
}