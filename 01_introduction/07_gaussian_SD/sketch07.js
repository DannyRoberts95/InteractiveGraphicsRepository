function setup(){
	frameRate(60);
	createCanvas(500,500);
	background(0);
}

function draw(){

	var xLocation = randomGaussian();
	var yLocation = randomGaussian();

	var standardDeviationX = 100;
	var standardDeviationY = 100;
	
	var xMean = width/2;
	var yMean = height/2;

	xLocation = (xLocation * standardDeviationX)+xMean;
	yLocation = (yLocation * standardDeviationY)+yMean;

	fill(255,20);
	noStroke();
	ellipse(xLocation,yLocation,10,10); 


}
