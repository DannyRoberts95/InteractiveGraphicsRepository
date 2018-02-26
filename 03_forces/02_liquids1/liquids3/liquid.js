var Liquid = function(x,y,w,h,d){

	this.location = createVector(x,y);
	this.width = w;
	this.height = h;
	this.density = d;

	this.render = function(){
		fill(0,0,255);
		noStroke();
		rect(this.location.x,this.location.y,this.width,this.height);
	}

	this.contains = function(other){
		return other.location.x > this.location.x && other.location.x < (this.location.x + this.width) &&
		other.location.y > this.location.y && other.location.y < (this.location.y + this.height)
	}
}