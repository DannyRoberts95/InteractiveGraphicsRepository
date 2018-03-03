var movers = [];
var population = 10;

function setup(){

	createCanvas(windowWidth,windowHeight);
	background(25);

	for(var i=0; i<population; i++){
		movers[i] = new Mover(Math.floor(random(10,40)));
	}
}

function draw(){

	background(25);

	for(var i=0; i<population; i++){

		var wind = createVector(0.02,0);
		
		//multiply by mass so that the divide in applyforce function
		//is canceled out as the force of gravity is an outlier
		//in terms of how it's calculated
		var gravity = createVector(0,0.5*movers[i].mass);

		//co efficient of friction (mew)
		var c = 0.5;

		//reactive force
		var n = 1;

		var frictionMag = c * n;

		var friction = p5.Vector.mult(movers[i].vel,-1);
		
		friction.normalize();

		friction.mult(frictionMag);



		// movers[i].applyForce(wind);
		// movers[i].applyForce(gravity);
		movers[i].applyForce(friction);
		movers[i].checkEdges();
		movers[i].render();
		movers[i].update();
	}

}
