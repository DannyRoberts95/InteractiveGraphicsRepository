var Mover = function(x,y,vx,vy,ax,ay,mass){

	this.location = createVector(x,y);
	this.vel = createVector(vx,vy);
	this.acc = createVector(ax,ay);
	this.mass = mass;

	this.update = function(){
		
		this.vel.add(this.acc);
		this.vel.limit(10);
		this.location.add(this.vel);
		this.acc.mult(0);
		this.vel.limit(3);
	}
	
	this.render = function(){
		noStroke(0);
		fill(255);
		ellipse(this.location.x,this.location.y,this.mass);
	}

	this.checkEdges = function(){
		if(this.location.x > width){
			this.location.x = 0;
		}if(this.location.x < 0){
			this.location.x = width;
		}if(this.location.y > height){
			this.location.y = 0;
		}if(this.location.y < 0){
			this.location.y = height;
		}

		// this.location.x = constrain(this.location.x,0,width);
		// this.location.y = constrain(this.location.y,0,height);

	}

	this.applyForce = function(force){
		// force divided by mass used to find acc (Newtons law)
		var f = p5.Vector.div(force,this.mass);
		this.acc.add(f);
	}
}