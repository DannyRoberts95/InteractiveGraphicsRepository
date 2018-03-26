var angle=0;
var angleVel=0.075;
var amp;

function setup(){
  createCanvas(windowWidth,windowHeight);
  background(255); 
  amp = 260;
}

function draw(){
  background(255,5);
  for(x=0; x<windowWidth; x+=0.25){
    var y = amp*cos(angle);
    noStroke();
    fill(map(x,0,windowWidth,255,0));
    ellipse(x,y+height/2,1);
    angle+=angleVel;
  }
}