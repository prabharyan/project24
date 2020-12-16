const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,ground1;
var dustbin1,dustbin2,dustbin3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world
	
 paper= new Paper(200,450,50)
	 ground1 = new Ground(width/2,670,width,20)
	 dustbin1= new Dustbin(1100,600,100,0)
	 dustbin2= new Dustbin(1300,600,100,0)
	 dustbin3 = new Dustbin(1300,600,100,0)



	Engine.run(engine);
  
}


function draw() {
  background(0);
  Engine.update(engine);
  strokeWeight(4);
//text(mouseX+","+mouseY,mouseX,mouseY)

  paper.display();
  ground1.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  

 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:180,y:-90})
	}
}


