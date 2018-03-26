var movers = [];
var population = 20;

function setup() {
    createCanvas(640, 640);

    for(var i=0; i<population; i++){
    	movers[i] = new Mover();
    }
   
}

function draw() {

    background(55);

    for(var i=0; i<population; i++){
    	//movers[i].checkEdges();
    	movers[i].update();
    	movers[i].display();
    }

}