function setup(){
	frameRate(60);
	createCanvas(500,500);
	background(0);
}

function draw(){

	var xLocation = randomGaussian();
	var yLocation = randomGaussian();

	var standardDeviationX = 50;
	var standardDeviationY = 50;
	
	var xMean = width/2;
	var yMean = height/2;

	xLocation = (xLocation * standardDeviationX)+xMean;
	yLocation = (yLocation * standardDeviationY)+yMean;

	colorGen1 = map(xLocation,0,255,0,255);
	colorGen2 = map(yLocation,0,255,0,255);

	fill(colorGen1,colorGen2,150);
	noStroke();
	ellipse(xLocation,yLocation,10,10); 


}
