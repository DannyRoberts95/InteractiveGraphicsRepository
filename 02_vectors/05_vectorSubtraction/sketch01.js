var position;
var velocity;

function setup(){

	createCanvas(500,500);
	
}

function draw(){

	background(51);

	var mouse = createVector(mouseX,mouseY);
	var centre = createVector(width/2,height/2);
	var vectorLine = mouse.sub(centre);

	translate(width/2,height/2);
	strokeWeight(2);
	stroke(255);
	line(0,0,vectorLine.x,vectorLine.y);
}
