# Vectorised Motion P5

This sketch depicts an array of walker objects each stepping randomly leaving a trail behind them. Walker objects are stored in an array and generated in a for loop. The walkers are distributed according to a gaussian function, with the screen centre defined as the mean and a standard deviation of 250.

```js

	var walkers =[];
	var population = 500;

	function setup(){
	frameRate(200);
	createCanvas(windowWidth,windowHeight);
	background(0);
	
	for(i=0;i<population;i++){
		
		var xLocation = randomGaussian();
		var yLocation = randomGaussian();
		
		var standardDeviation = 250;
		var meanX = width/2;
		var meanY = height/2;

		xLocation = (xLocation * standardDeviation)+meanX;
		yLocation = (yLocation * standardDeviation)+meanY;

		walkers[i] = new Walker(xLocation,yLocation);
	}
}

```
