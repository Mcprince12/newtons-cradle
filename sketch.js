
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bob1, bob2, bob3, bob4, bob5, 

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1 = new Ball(200, 200);
	bob2 = new Ball(250, 200);
	bob3 = new Ball(300, 200);
	bob4 = new Ball(350, 200);
	bob5 = new Ball(400, 100);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();


 
  drawSprites();
 
}



