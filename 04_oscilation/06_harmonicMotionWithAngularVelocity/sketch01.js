var angle = 0;
var aVel = 0.05;

function setup() {
  createCanvas(1000,1000);
}

function draw() {
  background(255);

  var amplitude = 100;
  var x = amplitude * cos(angle);

  angle += aVel;

  ellipseMode(CENTER);
  stroke(0);
  fill(175);
  translate(width/2,height/2);
  line(0,0,x,0);
  ellipse(x,0,20,20);
}