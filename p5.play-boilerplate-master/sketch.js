const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;


var engine;


function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  var fanOptions={
    isStatic:false
  }
  fan = Bodies.rectangle(300,50,20,20, fanOptions)
    World.add(world, fan)
  
  //  //var ball_options ={
  //    restitution : 1

  //  }

  //  //var groundOptions={
  //    isStatic: true
  //  }

  //  //ball = Bodies.circle(200, 20, 40, ball_options);
  //  //World.add(world,ball);
  //  /console.log(ball);

  //  ground= Bodies.rectangle(0,380,800,50, groundOptions);
  //  World.add(world, ground);

   

}


function draw() {
  background("blue");  
  Engine.update( engine);
//   ellipse(ball.position.x , ball.position.y, 20);

// rect(ground.position.x, ground.position.y, 400,20)  

Matter.Body.Rotate(fan,angle);
push()
translate(fan.position.x, fan.position.y)
rotate(angle)
rect(0,0,100,20)
pop()
angle+=0.1;
drawSprites();
}