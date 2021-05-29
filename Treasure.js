class Treasure {
    constructor (x,y,width,height) {
        var options = {
            isStatic: true,
            restitution:1
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.image = loadImage("images/treasureIMG.png");
        World.add(world, this.body);
    }

    display() {
        var pos =this.body.position;
        imageMode(CENTER);
        image(this.image,6010,280,130,130);
    }


}