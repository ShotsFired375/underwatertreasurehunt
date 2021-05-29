class Swimmer {
    construction(x,y,width,height) {
        var options = {
            'restitution':0.8,
            'friction':0.1,
            'density':1.0
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.image = loadImage("images/diverImg_1.png");
        World.add(world, this.body);

    }

    display(){
        push();
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    }

}