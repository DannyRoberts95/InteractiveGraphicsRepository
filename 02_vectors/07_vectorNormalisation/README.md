# Vector Normalisation P5

This sketch depicts vector normalisation.
The line is normalised, meaning it is scaled down to a length of one while retaining the same directional value.
It's then multiplied by 50.

```js

	var mouse = createVector(mouseX,mouseY);
	var centre = createVector(width/2,height/2);
	
	var vectorLine = mouse.sub(centre);
	
	vectorLine.normalize();
	vectorLine.mult(50);

```
