var walker;

function setup(){
	frameRate(200);
	createCanvas(500,500);
	background(150);
	walker = new Walker();
}

function draw(){

	
	walker.render();
	walker.move();

}

function Walker(){

	this.x = width/2;
	this.y = height/2;

	this.render = function(){
		stroke(0);
		fill(80);
		point(this.x,this.y, 10, 10);
	}

	this.move = function(){
		var stepX = floor(random(-1,2));
		var stepY = floor(random(-1,2));

		this.x = this.x + stepX;
		this.y = this.y + stepY;

	}

	this.x = constrain(this.x, 0, width);
	this.y = constrain(this.x, 0, height);
}