var population = 250;
var oscillators = [];


function setup(){
  createCanvas(windowWidth,windowHeight);
  background(0); 

  for(i=0;i<population;i++){
    oscillators[i] = new Oscillator(random(0,1000));
  }
}

function draw(){
  background(0);
  for(i=0;i<population;i++){
    oscillators[i].oscillate();
    oscillators[i].render();
  }
}

var Oscillator = function(_time){
  var angle = createVector();
  var vel = createVector(random(-0.01,0.01),random(-0.01,0.01));
  var amp = createVector(random((width*1.5)/2),random((height*1.5)/2));
  var time = _time;

  this.oscillate = function(){
    angle.add(vel);
  }
  this.render = function(){
    var x = sin(angle.x)*amp.x;
    var y = sin(angle.y)*amp.y;
    var rad = map(noise(time),0,1,2.5,25);
    
    var col = map(sin(time),0,1,0,255);
    var col2 = map(sin(time),0,1,0,255);
    var col3 = map(sin(time),0,1,0,255);

    time += 0.02;

    push();
    translate(width/2,height/2);
    strokeWeight(0.25)
    stroke(col,col2,col3,55);
    fill(col,col2,col3,55);
    line(0,0,x,y);
    noStroke();
    ellipse(x,y,rad);
    pop();
  }
}