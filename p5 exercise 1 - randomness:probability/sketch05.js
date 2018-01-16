var randomCounts =[];
var total = 20;

function setup(){
	frameRate(200);
	createCanvas(500,500);
	
	for(var i = 0; i<total; i++){
		randomCounts[i] = 0;
	}
}

function draw(){
	var index = floor(random(total));
	randomCounts[index]++;
		
	stroke(0);
	fill(255);

	var w = width/ randomCounts.length;

	for(var i = 0; i < randomCounts.length; i++){
		rect(i*w, height-randomCounts[i],w-1,randomCounts[i]);
	}
}
