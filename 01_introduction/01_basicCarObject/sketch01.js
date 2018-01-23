var c1;

function setup(){

	createCanvas(500,500);
	c1 = new Car();
}

function draw(){

	background(150);
	c1.render();
	c1.move();

}

function Car(){

	this.x = width/2;
	this.y = height/2;

	this.render = function(){
		noStroke();
		fill(80);
		rect(this.x,this.y, 100, 100);
	}

	this.move = function(){
		this.x++;
	}
}