# Vector Friction P5

This sketch depicts an array of ball objects experiencing the force of friction as they move.

The force divided by mass used to find acc (Newtons law) inside of the mover object

```js
	
		var f = p5.Vector.div(force,this.mass);
		this.acc.add(f);

```

	Gravity is not calculated in the same way as other forces. So we multiply the mass by .5 so that division by .5 in the applyForce fucntion is negated.

```js
		
		var gravity = createVector(0,0.5*movers[i].mass);

```
	The co efficient of friction represents how much resistance the surface will have.

```js

		//co efficient of friction (mew)
		var c = 0.5;

		//reactive force
		var n = 1;

		var frictionMag = c * n;

		var friction = p5.Vector.mult(movers[i].vel,-1);
		
		friction.normalize();

		friction.mult(frictionMag);

```
