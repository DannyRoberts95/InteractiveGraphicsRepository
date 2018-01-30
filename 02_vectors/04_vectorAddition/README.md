# Vector Addition P5

This sketch depicts vector addition.

# Instanciating our Vectors in setup.

```js

function setup(){

	createCanvas(500,500);
	position = createVector(100,100);
	velocity = createVector(10,7);
	
}

```
# Adding velocity to location via vectors and constarining the values on screen.

```js

position.add(velocity);

	if((position.x < 0) || (position.x > width)){
		velocity.x = velocity.x*-1;
	}
	if((position.y < 0) || (position.y > height)){
		velocity.y = velocity.y*-1;
	}

```
