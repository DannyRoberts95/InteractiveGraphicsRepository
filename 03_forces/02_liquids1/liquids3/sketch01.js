var mover1;
var liquid1;

function setup(){

	createCanvas(500,500);
	background(25);

	mover1 = new Mover(100,100,2,4,0.7,0.8,20);
	liquid1 = new Liquid(200,200,100,100,0); 
}

function draw(){

	background(25);

	liquid1.render();

	if(liquid1.contains(mover1)){
		console.log("PING")
	}

	mover1.update();
	mover1.render();
	mover1.checkEdges();
}
