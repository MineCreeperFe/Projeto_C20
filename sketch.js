const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var block1, block2, block3, plane;

function preload() {

}

function setup() {
	createCanvas(windowWidth, windowHeight);

	//engines
	engine = Engine.create();
	world = engine.world;

	//plane
	var planeOptions = {
		isStatic: true
	}

	//blockPhysics
	var block1_options = {
		restitution: 0.6,
		friction: 0.001,
		frictionAir: 0
	};
	var block2_options = {
		restitution: 2,
		friction: 0.01,
		frictionAir: 0.01
	};
	var block3_options = {
		restitution: 0.01,
		friction: 1,
		frictionAir: 0.2
	}

	//blocks
	plane = Bodies.rectangle(windowWidth/2,windowHeight-20,windowWidth,20,planeOptions);
	World.add(world,plane);

	block1 = Bodies.circle(windowWidth-windowWidth/2, 10, 28, block1_options);
	World.add(world, block1);

	block2 = Bodies.rectangle(windowWidth-windowWidth/1.4, 50, 10, 10, block2_options);
	World.add(world, block2);

	block3 = Bodies.rectangle(windowWidth-windowWidth/4, 50, 10, 80, block3_options);
	World.add(world, block3);

	Engine.run(engine);
}


function draw() {
	rectMode(CENTER);
	ellipseMode(RADIUS);
	background("orange");

	//sprites
	fill("green");
	ellipse(block1.position.x, block1.position.y, 50);
	fill("blue");
	rect(block2.position.x, block2.position.y, 50, 50);
	fill("purple");
	rect(block3.position.x, block3.position.y, 60, 120);

	Engine.update(engine);
	drawSprites();
}



