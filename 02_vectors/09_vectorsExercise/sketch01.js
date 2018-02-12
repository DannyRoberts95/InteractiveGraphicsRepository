var movers = [];
var population = 1000;

function setup(){
	
	background(255);

	createCanvas(windowWidth,windowHeight);

	for(i=0;i<population;i++){

		movers[i]= new Mover(); 
	}
}

function draw(){

	background(255,25);

	for(i=0;i<movers.length;i++){

		movers[i].moveMover();
		movers[i].renderMover();
		movers[i].constrain(); 
	}


}