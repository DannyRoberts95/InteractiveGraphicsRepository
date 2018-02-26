var mover1;
var liquid1;
var gravity;
var movers = [];
var population = 10;

function setup(){

	createCanvas(500,700);
	background(25);

	gravity = createVector(0,0.8);

	liquid1 = new Liquid(100,200,300,100,0.5,0); 
	liquid2 = new Liquid(100,325,300,100,0.1,55); 
	liquid3 = new Liquid(100,450,300,100,0.9,205);

	for(var i=0;i<population; i++){

		movers[i] = new Mover(random(100,width-100),50,0,0,0,0,random(10,30));
	}

	// var Mover = function(x,y,vx,vy,ax,ay,mass){ 
}

function draw(){

	background(250);

	liquid1.render();
	liquid2.render();
	liquid3.render();

	for(var i=0;i<movers.length; i++){


		if(liquid1.contains(movers[i])){
			var drag = liquid1.calcDrag(movers[i]);
			movers[i].applyForce(drag);
		}
		if(liquid2.contains(movers[i])){
			var drag = liquid1.calcDrag(movers[i]);
			movers[i].applyForce(drag);
		}
		if(liquid3.contains(movers[i])){
			var drag = liquid1.calcDrag(movers[i]);
			movers[i].applyForce(drag);
		}
	}

	for(var i=0;i<movers.length; i++){

		movers[i].update();
		movers[i].applyForce(gravity);
		movers[i].render();
		movers[i].checkEdges();
	}

	

	
}
