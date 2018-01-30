var walkers =[];
var population = 500;

function setup(){
	frameRate(200);
	createCanvas(windowWidth,windowHeight);
	background(0);
	
	for(i=0;i<population;i++){

		walkers[i] = new Walker(random(0,width),random(0,height));
	}
}

function draw(){

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
		stroke(random(255),random(255),random(255));
		point(position.x,position.y, 20, 20);
	}

	this.move = function(){
		var choice = floor(random(4));

		if(choice === 0){
			position.x=position.x+1
		}else if(choice === 1){
			position.x=position.x-1
		}else if(choice === 2){
			position.y=position.y+1
		}else{
			position.y=position.y-1
		}

		constrain(position.x,0,width);
		constrain(position.y,0,height);
	}


}