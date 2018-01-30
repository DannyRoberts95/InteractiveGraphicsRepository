var mover;

function setup(){

	createCanvas(500,500);
	background(25);

	mover = new Mover();
	
}

function draw(){

	background(25);

	mover.update();
	mover.checkEdge();
	mover.display();
}
