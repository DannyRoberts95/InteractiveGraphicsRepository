function Mover(){

	this.location = createVector(random(0,width),random(0,height));
	this.vel = p5.Vector.random2D();
	this.acc = createVector(random(-0.2,0.2),random(-0.2,0.2));

	this.radius = 1;

	this.moveMover = function(){

		this.location.add(this.vel);
		this.vel.add(this.acc);

		//temp var for storing mouse x/y updated every frame
		var mouse = createVector(mouseX,mouseY);

		//assigns acc as the product of built in p5 vector sub function
		//built in functions do not change the values of the vectors passed in
		// they only return a product of the two.
		this.acc = p5.Vector.sub(mouse,this.location);

		//makes length of acc vector equal to one but preserves directional values
		this.acc.normalize();

		//limits velocity to 10
		this.vel.limit(15);

	}

	this.renderMover = function(){

		
		noStroke();
		fill(random(255),200,200);
		ellipse(this.location.x,this.location.y, this.radius*2,this.radius*2)

	}

	this.constrain = function(){

		if((this.location.x < 0)||(this.location.x > width)){
			this.vel.x = (this.vel.x)*-1
		}
		if((this.location.y < 0)||(this.location.y > height)){
			this.vel.y = (this.vel.y)*-1
		}

	}
}