const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var bgImg, bgIMG, bgIMG2, diverAnimation, sharkImg, titleIMG, bg;
var diver1, beginningGreeting, sparklesGIF, treasure1, oofGIF, wowGIF;
var gameState = 0;
var wall1, wall2, wall3;
var playerLives=5;




function preload() {
  bgIMG2 = loadImage("images/riverIMG.png");
  sharkImg = loadImage("images/sharkImg.png");
  titleImg = loadImage("images/titleIMG.png");
  sparklesGIF = createImg("images/infinitesparkles.gif");
  sparklesGIF2 = createImg("images/infinitesparkles.gif");
  oofGIF = createImg("images/oofgif.gif");
  wowGIF = createImg("images/wowgif.gif");
}




function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(800,400);

 diver1 = new Diver(190, 200, 250, 150);

 beginningGreeting = new Instructions();

 treasure1 = new Treasure(6010,335,3,5);

 Vwall1 = new Wall(640, 285, 10, 100);
 Vwall2 = new Wall(1390, 195, 10, 100);
 Vwall3 = new Wall(1790, 285, 10, 100);
 Vwall4 = new Wall(2199, 106, 10, 100);
 Vwall5 = new Wall(2199, 175, 10, 100);
 Vwall6 = new Wall(2519, 285, 10, 100);
 Vwall7 = new Wall(2519, 205, 10, 100);
 Vwall8 = new Wall(2859, 106, 10, 100);
 Vwall9 = new Wall(2859, 186, 10, 100);
 Vwall10 = new Wall(3825, 285, 10, 100);
 Vwall11 = new Wall(3825, 245, 10, 100);
 Vwall12 = new Wall(4255, 106, 10, 100);
 Vwall13 = new Wall(4370, 198, 10, 100);
 Vwall14 = new Wall(4950, 278, 10, 100);
 Vwall15 = new Wall(5600, 106, 10, 100);
 Vwall16 = new Wall(5600, 156, 10, 100);

 Hwall1 = new Wall(1225, 160, 200, 10);
 Hwall2 = new Wall(1295, 160, 200, 10);
 Hwall3 = new Wall(1495, 230, 200, 10);
 Hwall4 = new Wall(1695, 230, 200, 10);
 Hwall5 = new Wall(3325, 200, 200, 10);
 Hwall6 = new Wall(3525, 200, 200, 10);
 Hwall7 = new Wall(3725, 200, 200, 10);
 Hwall8 = new Wall(4349, 152, 200, 10);
 Hwall9 = new Wall(4475, 243, 200, 10);
 Hwall10 = new Wall(5045, 228, 200, 10);
 Hwall11 = new Wall(5145, 228, 200, 10);
}



function draw() {
  if (gameState===1) {
    background("white");
    bg = image(bgIMG2, -325, -1, 7000, 400);  

    Vwall1.display();
    Vwall2.display();
    Vwall3.display();
    Vwall4.display();
    Vwall5.display();
    Vwall6.display();
    Vwall7.display();
    Vwall8.display();
    Vwall9.display();
    Vwall10.display();
    Vwall11.display();
    Vwall12.display();
    Vwall13.display();
    Vwall14.display();
    Vwall15.display();
    Vwall16.display();

    Hwall1.display();
    Hwall2.display();
    Hwall3.display();
    Hwall4.display();
    Hwall5.display();
    Hwall6.display();
    Hwall7.display();
    Hwall8.display();
    Hwall9.display();
    Hwall10.display();
    Hwall11.display();

    treasure1.display();
    
    textSize(24);
    text("lives left: "+playerLives, 501,35)
    text("lives left: "+playerLives, 500,35);

    if (playerLives === 0) {
      gameState=2;
    }
    if (diver1.body.position.x>5950 && diver1.body.position.y>170) {
      gameState=3;
    }
  } else if (gameState===0){
    background("lightblue");
    oofGIF.size(0,0);
  } else if (gameState===2) {
    background("red");
    strokeWeight(2);
    stroke("white");
    fill(rgb(230, 79, 65));
    textSize(24);
    text(":/ you lost! reload to play again! :/", 200, 200);
  } else if (gameState===3) {
    camera.position.x=400;
    background("green");
    strokeWeight(1.5);
    stroke("white");
    textSize(24);
    fill(rgb(69, 229, 66));
    text(":) good job! you won with "+playerLives+" lives left! :)", 185, 190);
    text(":) reload to play again! :)", 220, 227);
  }

  if (gameState===0) {
    image(titleImg, 50, 13, 700, 100);
    sparklesGIF.position(425,255);
    sparklesGIF.size(40,40);
    sparklesGIF2.position(485,230);
    sparklesGIF2.size(40,40);
  } else if (gameState===3) {
    sparklesGIF.position(0,0);
    sparklesGIF.size(200,200);
    sparklesGIF2.position(600,200);
    sparklesGIF2.size(350,350);
  } else {
    sparklesGIF.size(0,0);
    sparklesGIF2.size(0,0);
  }

  if (gameState===2) {
    oofGIF.position(100,150);
    oofGIF.size(800,280);
  } else {
    oofGIF.position(800,800);
    oofGIF.size(0,0);
  }

  if (gameState===3) {
    wowGIF.position(00,150);
    wowGIF.size(800,280);
  } else {
    wowGIF.position(800,800);
    wowGIF.size(0,0);
  }

  if (keyDown("RIGHT") && diver1.body.position.x <= 6010 && gameState===1 || keyDown("d") && gameState===1 && diver1.body.position.x <= 6010) {
    camera.position.x = camera.position.x+10;
  }
  if (keyDown("LEFT") && diver1.body.position.x >= 140 && gameState===1 || keyDown("a") && diver1.body.position.x >= 140 && gameState===1) {
    camera.position.x = camera.position.x-10;
  }

  beginningGreeting.display();
  diver1.display();

  detectCollision1(diver1,Vwall1);
  detectCollision1(diver1,Vwall2);
  detectCollision1(diver1,Vwall3);
  detectCollision1(diver1,Vwall4);
  detectCollision1(diver1,Vwall5);
  detectCollision1(diver1,Vwall6);
  detectCollision1(diver1,Vwall7);
  detectCollision1(diver1,Vwall8);
  detectCollision1(diver1,Vwall9);
  detectCollision1(diver1,Vwall10);
  detectCollision1(diver1,Vwall11);
  detectCollision1(diver1,Vwall12);
  detectCollision1(diver1,Vwall13);
  detectCollision1(diver1,Vwall14);
  detectCollision1(diver1,Vwall15);
  detectCollision1(diver1,Vwall16);

  detectCollision2(diver1,Hwall1);
  detectCollision2(diver1,Hwall2);
  detectCollision2(diver1,Hwall3);
  detectCollision2(diver1,Hwall4);
  detectCollision2(diver1,Hwall5);
  detectCollision2(diver1,Hwall6);
  detectCollision2(diver1,Hwall7);
  detectCollision2(diver1,Hwall8);
  detectCollision2(diver1,Hwall9);
  detectCollision2(diver1,Hwall10);
  detectCollision2(diver1,Hwall11);

  // console.log("x: "+diver1.body.position.x+",  y: "+diver1.body.position.y); 
  drawSprites();
}




function detectCollision1(bodyA, bodyB) {
	var xdistance=bodyA.body.position.x-bodyB.body.position.x;
  var ydistance=bodyA.body.position.y-bodyB.body.position.y;
	if (xdistance <= 150 && xdistance>=-145 && ydistance <= 90 && ydistance>=-85) {
		Matter.Body.setPosition(diver1.body, {x:150,y:200});
    camera.position.x=400;
    playerLives = playerLives-1;
	} 
}




function detectCollision2(bodyA, bodyB) {
	var xdistance=bodyA.body.position.x-bodyB.body.position.x;
  var ydistance=bodyA.body.position.y-bodyB.body.position.y;
	if (xdistance <=225 && xdistance>=-230 && ydistance <= 50 && ydistance>=-45) {
		Matter.Body.setPosition(diver1.body, {x:150,y:200});
    camera.position.x=400;
    playerLives = playerLives-1;
	} 
}
