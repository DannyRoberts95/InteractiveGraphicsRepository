# Vector Addition P5

This sketch depicts an array of moving objects that are coded to move towards the mouse. 

The code below builds on that of the last example. Velocity is added to location and velocity is incremented by the value of acceleration.

```js

		this.location.add(this.vel);
		this.vel.add(this.acc);

```
But in this sketch the vetor that serves as a representation of acceleration is found by subtracting the given objects location vector from the mouse location vector. 

```js
		//temp var for storing mouse x/y updated every frame
		var mouse = createVector(mouseX,mouseY);

		//assigns acc as the product of built in p5 vector sub function
		//built in functions do not change the values of the vectors passed in
		// they only return a product of the two.
		this.acc = p5.Vector.sub(mouse,this.location);
```
The resulting vector is then passed into the P5 normailize vector function which reduces it's length to 1, but preserves its directional value. In this case the normailized vector serves our purpose, but the normalized vector can be multiplied appropriatly if needed.

```js

		//makes length of acc vector equal to one but preserves directional values
		this.acc.normalize();

		//limits velocity to 10
		this.vel.limit(15);

```
