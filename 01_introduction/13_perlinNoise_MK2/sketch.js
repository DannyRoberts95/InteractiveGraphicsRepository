var walkers;
var population;

function setup(){
	
	createCanvas(windowWidth,windowHeight);
	background(0);

	population = 100;
	walkers = [];

	for(i=0; i<population; i++){

		walkers[i]= new Walker();
	}
}

function draw(){

	fill(0,20);
	rect(0,0,width,height);
	for(i=0; i<population; i++){
		walkers[i].step();
		walkers[i].render();
	}
}

function Walker() {

	this.position = createVector(width/2,height/2);
	this.noff = createVector(random(1000),random(1000));
	this.count = createVector(0.003, 0.003);

	this.render = function(){

		noStroke();
		fill(this.col,this.col2,this.col3,50);
		ellipse(this.position.x,this.position.y,
		map(noise(this.noff.x),0,1,10,100),
		map(noise(this.noff.x),0,1,10,100))

	}

	this.step = function(){

		this.col  = map(noise(random(1000)),0,1,1,255);
		this.col2 = map(noise(random(1000)),0,1,1,255);
		this.col3 = map(noise(random(1000)),0,1,1,255); 


		this.position.x = map(noise(this.noff.x),0,1,0,width);
		this.position.y = map(noise(this.noff.y),0,1,0,height);
		this.noff.add(this.count);

	}
}
