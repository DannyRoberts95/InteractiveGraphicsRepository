# Vector Addition P5

This sketch depicts a generic walker object.


```js

	var mouse = createVector(mouseX,mouseY);
	var centre = createVector(width/2,height/2);
	
	var vectorLine = mouse.sub(centre);
	
	vectorLine.normalize();
	vectorLine.mult(50);

```
