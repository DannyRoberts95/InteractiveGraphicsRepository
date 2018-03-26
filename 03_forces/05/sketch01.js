var windChimes = [];
var movers = [];
var moverPopulation = 3000;

function setup(){
	
	createCanvas(windowWidth,windowHeight);
	background(125,200,255);

	// function WindChime(_x,_y,_windMag,_startAngle,_endAngle){

	windChimes[0] = new WindChime(width/2,70,(random(2)),45,135);
	// windChimes[1] = new WindChime(70,height-100,random(3),270,360);
	// windChimes[2] = new WindChime(width-70,height-100,random(3),180,270);
	// windChimes[1] = new WindChime(width-70,70,random(0.25),90,180);

	for(i=0;i<moverPopulation;i++){
		// function(x,y,vx,vy,ax,ay,mass)
		movers[i] = new Mover(floor(random(width)),floor(random(height)),floor(random(1,3)),floor(random(1,3)),0,0,floor(random(1,4)));
	}

}

function draw(){

	background(100,150);

	for(var i=0; i<windChimes.length; i++){
		
		for(var j=0; j<movers.length; j++){
		
			movers[j].applyForce(windChimes[i].windVector);
			movers[j].update();
			movers[j].checkEdges();
			movers[j].render();

		}
	}
	for(var i=0;i<windChimes.length;i++){
		windChimes[i].update();
		windChimes[i].display();
	}
	
}
