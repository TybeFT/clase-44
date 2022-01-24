class Game {
    constructor(){

    }
    createWalls(sprite,x,y,width,height) {
        sprite = createSprite(x,y,width,height);
        sprite.shapeColor = "black";
    }

    display(){
        player = createSprite(20,70,30,30);
        player.shapeColor = "red";

        createWalls(wall1,displayWidth/2,displayHeight/2,50,50);
        // Controles personaje
        if (keyDown("LEFT")) {
            player.x = player.x - 3;
        }else if (keyDown("RIGHT")) {
            player.x = player.x + 3;
        }else if (keyDown("UP")) {
            player.y = player.y - 3;
        }else if (keyDown("DOWN")) {
            player.y = player.y + 3;
        }

        // Controles secundarios (opcional)
        if (keyDown("A")) {
            player.x = player.x - 3;
        }else if (keyDown("D")) {
            player.x = player.x + 3;
        }else if (keyDown("W")) {
            player.y = player.y - 3;
        }else if (keyDown("S")) {
            player.y = player.y + 3;
        }
    }
}