var Mover = function(){

	this.location = createVector(100,100);
	this.velocity = createVector(10,5);
	this.acc = 		createVector(2,1);

	this.update = function(){
		
		this.velocity.add(this.acc);
		this.velocity.limit(10);
		this.location.add(this.velocity);		
	}

	this.display = function(){

		noStroke();
		fill(255);
		ellipse(this.location.x,this.location.y,40,40);
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