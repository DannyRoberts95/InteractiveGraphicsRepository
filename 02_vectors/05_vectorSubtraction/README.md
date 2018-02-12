# Vector Subtraction P5

This sketch depicts vector subtraction.

Vector line is instanciated to the sub function, which returns the length of the line we wish to draw.

```js

	var mouse = createVector(mouseX,mouseY);
	var centre = createVector(width/2,height/2);

	var vectorLine = mouse.sub(centre);

```
