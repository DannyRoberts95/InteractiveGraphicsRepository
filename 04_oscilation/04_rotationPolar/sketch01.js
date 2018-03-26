var r = 500;
var theta = 0;
var x;
var y;

var col = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(255,155,155);
}

function draw() {

    // background(255);

    x = r * cos(theta);
    y = r * sin(theta);

    push();
    translate(width/2,height/2);
    noStroke();
    fill(col);
    ellipse(x, y, 10, 10);
    pop();

    theta += 0.06;
    r -= 0.10;
    col = map(r,500,0,0,255);

    if(r<=0){
        noLoop();
    }
}