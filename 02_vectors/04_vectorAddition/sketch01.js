var position;
var velocity;

function setup(){

	createCanvas(500,500);
	position = createVector(100,100);
	velocity = createVector(10,7);
	
}

function draw(){

	background(51);

	position.add(velocity);

	if((position.x < 0) || (position.x > width)){
		velocity.x = velocity.x*-1;
	}
	if((position.y < 0) || (position.y > height)){
		velocity.y = velocity.y*-1;
	}

	stroke(0);
	strokeWeight(2);
	fill(150);
	ellipse(position.x,position.y,10,10);


}
