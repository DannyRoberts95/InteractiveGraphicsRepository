var walker;

function setup(){
	frameRate(100);
	createCanvas(500,500);
	background(150);
	walker = new Walker();
}

function draw(){

	
	walker.render();
	walker.move();

}

function Walker(){

	// this.x = width/2;
	// this.y = height/2;

	var position = createVector(width/2,height/2);

	this.render = function(){
		stroke(0);
		fill(80);
		point(position.x,position.y, 20, 20);
	}

	this.move = function(){
		var choice = floor(random(4));

		if(choice === 0){
			position.x++
		}else if(choice === 1){
			position.x--
		}else if(choice === 2){
			position.y++
		}else{
			position.y--
		}
	}
}