class Diver {
    constructor(x,y,width,height) {
        var options = {
            'restitution':0.8,
            'friction':0.1,
            'density':1.0
        }
        this.width = width;
        this.height = height;

        this.body = Bodies.rectangle(x,y,this.width,this.height,options);
        this.image = loadImage("images/diverImg_11.png");
        this.animationnn = loadAnimation("images/diverImg_11 copy.png", "images/diverImg_12 copy.png", "images/diverImg_13 copy.png");
        World.add(world, this.body);

    }

    display(){

        if (gameState === 1) {
            animation(this.animationnn, this.body.position.x, this.body.position.y, this.width, this.height);

        }   else if (gameState === 4) {
            image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);
        }

        if (keyDown("RIGHT") && this.body.position.x <= 6010|| keyDown("d") && this.body.position.x <= 6010) {
            this.body.position.x = this.body.position.x+10;
        }
        if (keyDown("LEFT") && this.body.position.x >= 140 || keyDown("a") && this.body.position.x >= 140) {
            this.body.position.x = this.body.position.x-10;
        }
        if (keyDown("UP") && this.body.position.y>=110 || keyDown("w") && this.body.position.y>=110) {
            this.body.position.y = this.body.position.y-10;
        }
        if (keyDown("DOWN") && this.body.position.y<=295 || keyDown("s") && this.body.position.y<=295) {
            this.body.position.y = this.body.position.y+10;
        }
    }
}
