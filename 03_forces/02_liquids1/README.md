# Liquids and Drag Forces P5

This collection of sketchs are building up to sketch 4, which depicts an array of mover objects falling through liquids that simulate different densities. 

In sketch 2 we pass the mover object into the contains function withing the liquid class. This returns true or false based on whether or not the mover object it is passed is contained within the liquid object.
```js

this.contains = function(other){
		return other.location.x > this.location.x && other.location.x < (this.location.x + this.width) &&
		other.location.y > this.location.y && other.location.y < (this.location.y + this.height)
	}

```
In sketch 4 we add the calcDrag function to liquids so the program knows what force to apply to the movers contained within the liquid. This drag force os calculatd using the coEfficient of drag mathamatical formula.

```js
this.calcDrag = function(other){

		var speed = other.vel.mag();
		var dragMagnitude = this.coefDrag*speed*speed;

		//direction inverse of force
		var dragForce = p5.Vector.mult(other.vel,-1);

		dragForce.normalize();
		dragForce.mult(dragMagnitude);
		return dragForce;
	}

```
As the program runs we loop through the array containing the mover objects and chck each one to see if they are conatined inside any of the liquids. If the mover is contained in the liquid, we calculate the drag and apply the drag force to the vector object.

```js

for(var i=0;i<movers.length; i++){


		if(liquid1.contains(movers[i])){
			var drag = liquid1.calcDrag(movers[i]);
			movers[i].applyForce(drag);
		}
		if(liquid2.contains(movers[i])){
			var drag = liquid1.calcDrag(movers[i]);
			movers[i].applyForce(drag);
		}
		if(liquid3.contains(movers[i])){
			var drag = liquid1.calcDrag(movers[i]);
			movers[i].applyForce(drag);
		}
	}
```