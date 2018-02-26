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
	}
	
	this.render = function(){
		noStroke(0);
		fill(255,0,0);
		ellipse(this.location.x,this.location.y,this.mass,this.mass);
	}

	this.checkEdges = function(){
		if(this.location.x >= (width-this.mass/2) || this.location.x <= (0+this.mass/2)){
			this.vel.x = this.vel.x*-1;		}
		if(this.location.y >= (height-this.mass/2) || this.location.y <= (0+this.mass/2)){
			this.vel.y = this.vel.y*-1;
		}
	}

	this.applyForce = function(force){
		// force divided by mass used to find acc (Newtons law)
		var f = p5.Vector.div(force,this.mass);
		this.acc.add(f);
	}
}