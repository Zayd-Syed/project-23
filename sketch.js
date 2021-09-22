const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var rope1,rope2,rope3,rope4,rope5;
var bob1,bob2,bob3,bob4,bob5;
//Create multiple bobs, mulitple ropes varibale here


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	Engine.run(engine);

	bob1 = Bodies.circle(100,200,20,ball_options);
  World.add(world,bob1);

  bob2 = Bodies.circle(100,200,20,ball_options);
  World.add(world,bob2);

  bob3 = Bodies.circle(100,200,20,ball_options);
  World.add(world,bob3);

  bob4 = Bodies.circle(100,200,20,ball_options);
  World.add(world,bob4);
  
  bob5 = Bodies.circle(100,200,20,ball_options);
  World.add(world,bob5);

  bob1 = Matter.Constraint.create({ 
    pointA:{x:200,y:20}, 
    bodyB:ball, 
    pointB:{x:0,y:0},
    length:100, 
    stiffness:0.1 
    });
   World.add(world,con1); 
  con2 = Matter.Constraint.create({
   bodyA:ball1,
   pointA:{x:200,y:20},
   bodyB: ball,
   pointB:{x:0,y:0},
   length:100,
   stiffness: 0.1,
  });
  World.add(world,con2);
	
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);

  //call display() to show ropes here
  display();

  
  //create ellipse shape for multiple bobs here

 
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
