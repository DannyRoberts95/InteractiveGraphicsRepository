# Vector Wind P5

This sketch depicts a basic vector that changes direction according to perlin noise. This concept will later be used to simulate wind.

An angle is generated between 0 and 90 degrees using the noise and map functions.
The time variable is incremented slightly. The wind vector is generated from the angle var using the vector from angle function. The vector is multiplied by 500 so as to make it visible and a line is draw to represent the vector.

```js

	angle = map(noise(time),0,1,0,90);
	time = time + 0.005;

	wind = p5.Vector.fromAngle(radians(angle));
	wind.mult(500);

	stroke(0);
	line(0,0,wind.x,wind.y);

```