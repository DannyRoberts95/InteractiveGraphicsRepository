var Mover = function(){

	this.location = createVector(200,200);
	this.velocity = createVector(0.03,0.02);
	this.acc = 		createVector(0.08,0.09);
	this.mass = 	10;
	this.angle = 	0;
	this.aVel = 	0;
	this.aAcc =		0.1;

	this.update = function(){
		
		this.velocity.add(this.acc);
		this.velocity.limit(10);
		this.location.add(this.velocity);
		this.acc.mult(0);

		this.aAcc = this.velocity.x /1000;

		this.aVel += this.aAcc;
		this.aVel = constrain(this.aVel,0,0.01);	
		this.angle += this.aVel;	
	}

	this.display = function(){

		noStroke();
		fill(255,100,150);
		

		push();
		rectMode(CENTER);
		translate(this.location.x, this.location.y);
		rotate(this.angle);
		rect(0,0,this.mass*10,this.mass*10);
		pop();
		
	}

	this.checkEdge = function(){

		if((this.location.x < 0)||(this.location.x > canvas.width)){
			this.velocity.x = this.velocity.x*-1;
			this.acc.x = this.acc.x*-1;
		}
		if((this.location.y < 0)||(this.location.y > canvas.height)){
			this.velocity.y = this.velocity.y*-1;
			this.acc.y = this.acc.y*-1;
		}
	}
}