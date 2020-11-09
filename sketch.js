const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var bob
var platform;

function preload()
{
	backgroundImg = loadImage("sprites/bg.png");
}

function setup() {
	createCanvas(400,400);


	engine = Engine.create();
	world = engine.world;

	bob = new Bob(700,320,70,70);
	platform =new Platform(400,200,70,70);
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  bob.display();
  platform.display();

}



