var Liquid = function(x,y,w,h,cd,col){

	this.location = createVector(x,y);
	this.width = w;
	this.height = h;
	this.coefDrag = cd;
	this.col = col;

	this.render = function(){
		fill(this.col);
		noStroke();
		rect(this.location.x,this.location.y,this.width,this.height);
	}

	this.contains = function(other){
		return other.location.x > this.location.x && other.location.x < (this.location.x + this.width) &&
		other.location.y > this.location.y && other.location.y < (this.location.y + this.height)
	}

	this.calcDrag = function(other){

		var speed = other.vel.mag();
		var dragMagnitude = this.coefDrag*speed*speed;

		//direction inverse of force
		var dragForce = p5.Vector.mult(other.vel,-1);

		dragForce.normalize();
		dragForce.mult(dragMagnitude);
		return dragForce;
	}
}