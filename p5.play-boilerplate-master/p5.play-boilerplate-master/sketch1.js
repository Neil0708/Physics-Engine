var fixedRect, movingRect;
var ob1, ob2

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  ob1 = createSprite(200,200,20,20)
  ob1.shapeColor="red";
  ob1.velocityY=3

  ob2 = createSprite(200,700,20,20)
  ob2.shapeColor="yellow";
  ob2.velocityY=-3

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  

  bounceOff(ob1,ob2);
  
  drawSprites();
}

