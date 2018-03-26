var angle = 0;
var angleVel = 0.2;
var amplitude = 100;
 
function setup(){
createCanvas(1000,1000);
background(255);
}
 
function draw(){
background(255);
stroke(0);
strokeWeight(2);
noFill();
 
beginShape();
for (var x = 0; x <= width; x += 1) {

  var y = map(sin(angle),-1,1,height/4,height/2);
  vertex(x,y);
  angle +=angleVel;
}
endShape();
}