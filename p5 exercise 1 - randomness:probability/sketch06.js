function setup(){
	frameRate(200);
	createCanvas(500,500);
}

function draw(){
	var xLocation = randomGaussian();

	var standardDeviation = 60;
	var mean = width/2;

	xLocation = (xLocation * standardDeviation)+mean;

	fill(0,10);
	noStroke();
	ellipse(xLocation,height/2,50,50); 
}
