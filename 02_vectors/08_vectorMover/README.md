# Vector Addition P5

This sketch depicts vector Normalisation.
The line is normalised, meaning it is scaled down to a length of one pixel while retaining the same directional value.
It's then multiplied by 50 to scale it up to a visable level.

```js

	var mouse = createVector(mouseX,mouseY);
	var centre = createVector(width/2,height/2);
	
	var vectorLine = mouse.sub(centre);
	
	vectorLine.normalize();
	vectorLine.mult(50);

```
