	var wind;
	var time = 1000;
	var angle;

function setup(){
	createCanvas(600,600);
}

function draw(){

	background(255);

	angle = map(noise(time),0,1,0,90);
	time = time + 0.005;

	wind = p5.Vector.fromAngle(radians(angle));
	wind.mult(500);

	stroke(0);
	line(0,0,wind.x,wind.y);
}
