var Mover = function () {
    this.position = createVector(random(width), random(height));
    this.velocity = createVector(0, 0);
    this.acceleration;
    this.topspeed = 4;
    this.angle = 0;
    this.angleVelocity = 0;
    this.angleAcceleration = 0;

    this.update = function () {
        var mouse = createVector(mouseX, mouseY);
        var dir = p5.Vector.sub(mouse, this.position);
        dir.normalize();
        dir.mult(0.04);
        this.acceleration = dir;

        this.velocity.add(this.acceleration);
        this.velocity.limit(this.topspeed);
        this.position.add(this.velocity);
    };

    this.display = function () {

    	var angle = this.acceleration.heading();

        stroke(0);
        strokeWeight(2);
        fill(127);

        push();
        translate(this.position.x, this.position.y);
        rotate(angle);
        rect(0,0, 18, 7);
        pop();

    };

    this.checkEdges = function () {
        if (this.position.x > width) {
            this.position.x = 0;
        } else if (this.position.x < 0) {
            this.position.x = width;
        }

        if (this.position.y > height) {
            this.position.y = 0;
        } else if (this.position.y < 0) {
            this.position.y = height;
        }
    };
};