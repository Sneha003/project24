

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

	//Create the Bodies Here.
	boxSprite1=createSprite(580,680,200,20);
	boxSprite1.shapeColor=color(225)
	
	boxSprite2=createSprite(680,630,20,100);
	boxSprite2.shapeColor=color(225)
	
	boxSprite3=createSprite(480,630,20,100);
	boxSprite3.shapeColor=color(225)
	
	 
	

	

	 ground = new Ground(600,height,1200,20)
	 
	
	

	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ellipse(56, 662, 55, 55);
  fill("blue");
  ground.display();
 
  drawSprites();
 
}
function keypressed(){
if(keyCode===UP_ARROW){

	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
}

}


