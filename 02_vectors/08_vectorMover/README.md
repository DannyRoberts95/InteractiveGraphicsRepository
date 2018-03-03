# Vector Velocity & Acceleration P5

This sketch depicts a Bouncing ball with a velocity and acceleration. Theses bare basic representations of forces acting upon the ball.

Below we instanciate the vectors that will control the forces acting upon the ball.

```js

	this.location = createVector(100,100);
	this.velocity = createVector(0.03,0.02);
	this.acc = 		createVector(0.01,0.02);

```
Every frame the update function adds the acceleration to the velocity and velocity to the location. The velocity is constarined so as not to make the ball move so fast it becomes      unobservable. 

```js
	this.update = function(){
		
		this.velocity.add(this.acc);
		this.velocity.limit(20);
		this.location.add(this.velocity);		
	}

```
