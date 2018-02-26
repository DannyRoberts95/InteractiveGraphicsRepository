function setup(){

	createCanvas(500,500);
	background(25);

	mover1 = new Mover(100,100,0,0,0.7,0.8,20);
}

function draw(){

	background(25);

	mover1.update();
	mover1.render();
	mover1.checkEdges();


}
