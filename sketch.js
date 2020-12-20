
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball1, ball2, ball4, ball3, ball5
var ground
var sling1, sling2, sling3, sling4, sling5

function preload()
{
	
}

function setup() {
	createCanvas(900, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = Bodies.rectangle(425, 300, 350, 20)
	World.add(world, ground)
	ball1 = new Paper(300, 550, 35)
	ball2 = new Paper(360, 550, 35)
	ball3 = new Paper(420, 550, 35)
	ball4 = new Paper(480, 550, 35)
	ball5 = new Paper(540, 550, 35)

	sling1 = new Slingshot(ball1.body, {
		x: 300,
		y: 300
	})
	sling2 = new Slingshot(ball2.body, {
		x: 360,
		y: 300
	})
	sling3 = new Slingshot(ball3.body, {
		x: 420,
		y: 300
	})
	sling4 = new Slingshot(ball4.body, {
		x: 480,
		y: 300
	})
	sling5 = new Slingshot(ball5.body, {
		x: 540,
		y: 300
	})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("yellow");

  ball1.display()
  ball2.display()
  ball3.display()
  ball4.display()
  ball5.display()
  sling1.display()
  sling2.display()
  sling3.display()
  sling4.display()
  sling5.display()
  rect(425, 300, 350, 20)
  
  drawSprites();
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Body.applyForce(ball1.body, ball1.body.position, {
			x: -60,
			y: -60
		})
	}
}



