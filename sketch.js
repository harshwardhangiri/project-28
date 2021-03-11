var ground,ball1,squ1,squ2,squ3,dustbin,dustbin1;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	squ1Sprite=createSprite(1150,460,162,20);
	squ1Sprite.shapeColor=color(255, 48, 48)	
	squ2Sprite=createSprite(1220,360,20,200);
	squ2Sprite.shapeColor=color(255, 48, 48)	
	squ3Sprite=createSprite(1100,360,20,200);
	squ3Sprite.shapeColor=color(255, 48, 48);
	
	dustbin1 = createSprite(1150,355,20,20);
	dustbin = loadImage ("image/dustbingreen.png");
	
	
	groundSprite=createSprite(width/2,480,8000,20);
	groundSprite.shapeColor=color(100, 255, 33)	
}

function setup() {
	createCanvas(1300, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(width/2,480,1400,20);
    ball1 = new Ball(300,200);
	box1 = new Box(1150,460,162,20);
	box2 = new Box(1220,360,20,200);
	box3 = new Box(1100,360,20,200);

	launcher = new Launcher(ball1.body,{x:300,y:200 });

	Engine.run(engine);
  
}


function draw() {

  rectMode(CENTER);
  background(230);
  dustbin1.addImage(dustbin);
  dustbin1.scale=0.7;
  ground.display();
  ball1.display();
  box1.display();
  box2.display();
  box3.display();
  launcher.display();
  //mouseDragged();
  
  drawSprites();
 
}






function mouseDragged() {

    Matter.Body.setPosition(ball1.body,{x:mouseX,y:mouseY});

}



function mouseReleased () {

launcher.fly();



}


