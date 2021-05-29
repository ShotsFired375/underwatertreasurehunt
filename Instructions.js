class Instructions{
    constructor() {
        this.instructions = createElement('h3');
        this.instructions2 = createElement('h3');
        this.instructions3 = createElement('h3');
        this.startBtn = createButton('begin!');

    }

    hide(){
        this.instructions.hide();
        this.instructions2.hide();
        this.instructions3.hide();
        this.startBtn.hide();
      }

    display() {
        stroke("blue");

        this.instructions.html("Instructions: Use WASD or arrow key to swim through the maze. If");
        this.instructions2.html(" you touch the maze walls, you will lose a life and get sent back to the beginning.");
        this.instructions3.html(" You have 5 lives in total. Click the 'begin!' button to start! ");
        this.instructions.position(130, 120);
        this.instructions2.position(90, 143);
        this.instructions3.position(180, 166);

        this.startBtn.position(450, 250);

        this.startBtn.mousePressed(()=>{
            this.instructions.hide();
            this.instructions2.hide();
            this.instructions3.hide();
            this.startBtn.hide();
            gameState = 1;
        });

    }
}