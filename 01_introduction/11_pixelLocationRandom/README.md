# Pixel Location
	
	This sketch also depicts the targeting of individual pixels.

	The bright var is reset every iteration of the sketch so as to create a static effect.

	The index variable contains the formula to target a pixel at a certain location;

```js

	bright = random(255);

	var index = (x + y * width) * 4;
			
	pixels[index + 0]=bright; // RED VALUE
	pixels[index + 1]=bright; // GREEN VALUE
	pixels[index + 2]=bright; // BLUE VALUE
	pixels[index + 3]=255; // ALPHA VALUE

```