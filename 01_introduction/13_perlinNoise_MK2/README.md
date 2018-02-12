# Perlin noise

This sketch depicts the mapping of perlin noise.

	below we assign the position, noff(which represents time) and count(the number by which we increment time each iteration of the draw method).

```js

	this.position = createVector(width/2,height/2);
	this.noff = createVector(random(1000),random(1000));
	this.count = createVector(0.003, 0.003);

```
	below we render the circles. The width and heights are passed in as perlin nois functions that
	map the noff y and y to a new value between 20 and 200.

```js

	noStroke();
	fill(255,45,0,50);
	ellipse(this.position.x,this.position.y,map(noise(this.noff.x),0,1,20,200),
	map(noise(this.noff.x),0,1,20,200))
		
```
	Below we map the circles to a position within the canvas. 

```js

	this.step = function(){
	this.position.x = map(noise(this.noff.x),0,1,0 -200,width+200);
	this.position.y = map(noise(this.noff.y),0,1,0 -200,height+200);
	this.noff.add(this.count);

```