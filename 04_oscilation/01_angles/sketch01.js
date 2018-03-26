var angle = 0;
var aVel = 0;
var aAcc = 0.002;
var time = 1000;

function setup(){
	createCanvas(500,500);
}

function draw(){
	background(220);

	stroke(0);
	fill(map(noise(time),0,1,0,255,));
	time += 0.005;

	push();
	translate(width/2, height/2);
	rotate(angle);
	line(-60,0,60,0);
	ellipse(60,0,16,16);
	ellipse(-60,0,16,16);
	pop();

	aVel += aAcc;
	aVel = constrain(aVel,0,0.1);
	console.log(aVel);
	angle += aVel;

}
