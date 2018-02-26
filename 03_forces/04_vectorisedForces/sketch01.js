var mover1;
var liquid1;
var gravity;
var movers = [];
var population = 1000;

var angle;
var angle2;
var angle3;
var angle4;

var wind;
var wind2;
var wind3;
var wind4;

var time = 1000;
var time2 = 500;
var time3 = 200;
var time4 = 345;

var timeIncrement = 0.005;

function setup(){

	createCanvas(800,800);
	background(25);

	gravity = createVector(0,0.8);

	for(var i=0;i<population; i++){

		movers[i] = new Mover(random(100,width-100),random(100,height-100),0,0,0,0,random(0,1));
	}

	// var Mover = function(x,y,vx,vy,ax,ay,mass){ 
}

function draw(){

	background(0,15);

	push();
	translate(width,0);
	ellipse(0,0,20,20);
	angle = map(noise(time),0,1,90,180);
	time = time+timeIncrement;
	wind = p5.Vector.fromAngle(radians(angle));
	wind.mult(500);
	stroke(255);
	line(0,0,wind.x,wind.y);
	wind.normalize();
	wind.mult(0.1);

	pop();

	push();

	ellipse(0,0,20,20);
	angle2 = map(noise(time2),0,1,0,90);
	time2 = time2+timeIncrement;
	wind2 = p5.Vector.fromAngle(radians(angle2));
	wind2.mult(500);
	stroke(255);
	line(0,0,wind2.x,wind2.y);
	wind2.normalize();
	wind2.mult(0.1);

	pop();

	push();
	translate(width,height);
	ellipse(0,0,20,20);
	angle3 = map(noise(time3),0,1,180,270);
	time3 = time3+timeIncrement;
	wind3 = p5.Vector.fromAngle(radians(angle3));
	wind3.mult(500);
	stroke(255);
	line(0,0,wind3.x,wind3.y);
	wind3.normalize();
	wind3.mult(0.1);

	pop();

	push();
	translate(0,height);
	ellipse(0,0,20,20);
	angle4 = map(noise(time4),0,1,270,360);
	time4 = time4+timeIncrement;
	wind4 = p5.Vector.fromAngle(radians(angle4));
	wind4.mult(500);
	stroke(255);
	line(0,0,wind4.x,wind4.y);
	wind4.normalize();
	wind4.mult(0.1);

	pop();	

	for(var i=0;i<movers.length; i++){

		movers[i].update();
		movers[i].applyForce(wind);
		movers[i].applyForce(wind2);
		movers[i].applyForce(wind3);
		movers[i].applyForce(wind4);
		movers[i].render();
		movers[i].checkEdges();
	}
}
