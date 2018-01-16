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

	this.x = width/2;
	this.y = height/2;

	this.render = function(){
		stroke(0);
		fill(80);
		point(this.x,this.y, 10, 10);
	}

	this.move = function(){

		var choice = random(1);

		if(choice < 0.4){
			this.x++
		}else if(choice < 0.6){
			this.x--
		}else if(choice < 0.8){
			this.y++
		}else{
			this.y--
		}
	}
}