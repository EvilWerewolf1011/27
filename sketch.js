
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var roof;
var world,engine;
var rope1,rope2,rope3,rope4,rope5,rope5,rope7;
var bob1,bob2,bob3,bob4,bob5,bob6,bob7;

function preload()
{
	
}

function setup() {
	createCanvas(1350, 650);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	bob1 = new Bob(200,500,80)
	bob2 = new Bob(234,500,80)
	bob3 = new Bob(243,500,80)
	bob4 = new Bob(220,500,80)
	bob5 = new Bob(290,500,80)
	bob6 = new Bob(260,500,80)
	bob7 = new Bob(210,500,80)


	ground = new Ground(675,620,1400,20)

	roof = new Ground(675,50,1000,25)

	rope1 = new Rope(bobObject1.body,roofObject.body,-bobDiameter*2,0)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(224,224,224);
  
  drawSprites();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  bob6.display();
  bob7.display();
  roof.display();
  ground.display();
  rope1.display();
 
}



