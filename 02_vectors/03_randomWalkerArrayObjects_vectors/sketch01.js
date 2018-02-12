var walkers =[];
var population = 2000;

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

function draw(){
	background(255,5);

	for(i=0;i<walkers.length;i++){

		walkers[i].render();
		walkers[i].move();
	}

}

function Walker(x,y){

	this.x=x;
	this.y=y;

	var position = createVector(this.x,this.y);

	this.render = function(){
		
		
		strokeWeight(1);
		// stroke(random(255),random(255),random(255));
		stroke(0,250);
		point(position.x,position.y, 20, 20);
	}

	this.move = function(){
		var choice = floor(random(4));
		var stepDis = 3;

		if(choice === 0){
			position.x=position.x+stepDis
		}else if(choice === 1){
			position.x=position.x-stepDis
		}else if(choice === 2){
			position.y=position.y+stepDis
		}else{
			position.y=position.y-stepDis
		}

		constrain(position.x,50,width-50);
		constrain(position.y,50,height-50);
	}


}