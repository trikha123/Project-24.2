
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

hammer1	= new Hammer(400,200)
plane1 = new Plane(400, 650, 800, 50)
stone1 = new Stone (400, 400, 100, 50)
circle1 = new Rubber ( 600, 500, 10)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  hammer1.display();
  plane1.display();
  stone1.display();
  circle1.display();

  drawSprites();
 
}



