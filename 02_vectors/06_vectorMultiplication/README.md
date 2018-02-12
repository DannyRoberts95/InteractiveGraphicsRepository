# Vector Multiplication P5

This sketch depicts vector multiplication.

Vector line is assigned a value by the sub function, which returns the length of the line we wish to draw.
We then pass the vectorLine through the Mult function which multiplies is by 0.5, halfing it's size.

```js

	var mouse = createVector(mouseX,mouseY);
	var centre = createVector(width/2,height/2);

	var vectorLine = mouse.sub(centre);

	vectorLine.mult(0.5);

```
