var movingRect 
var fixedRect
var objectRect,objectRect2;

function setup() {
  createCanvas(800,400);
  fixedRect= createSprite(400, 200, 50, 50);
  fixedRect.shapeColor="blue";
  fixedRect.debug=true;
  movingRect=createSprite(320,380,100,50);
  movingRect.shapeColor="blue";
  movingRect.debug=true;
  objectRect= createSprite(600, 100, 50, 50);
  objectRect.shapeColor="blue";
  objectRect2= createSprite(300, 250, 50, 50);
  objectRect2.shapeColor="blue";


}

function draw() {
  background(255,255,255);  
  movingRect.x= World.mouseX;
  movingRect.y= World.mouseY;

  console.log(movingRect.x-fixedRect.x);
  console.log(movingRect.width/2+fixedRect.width/2)

  if(isTouching(objectRect2,movingRect)){
    objectRect2.shapeColor="red";
    movingRect.shapeColor="red";
  }
  else{
    objectRect2.shapeColor="blue";
    movingRect.shapeColor="blue";
  }
  drawSprites();
}

