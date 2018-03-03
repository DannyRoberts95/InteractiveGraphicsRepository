# Pixel Location
	
	This sketch depicts the targeting of individual pixels.

	Below we set the pixel density to 1 to standardize the sketch across different screen resolutions.

```js

	pixelDensity(1);

```
	We then load the pixels into and array and loop through each pixel and assign its value.
	The pixels are then updated.

```js

	loadPixels();

	for(var y = 0; y<height; y++){

		for(var x = 0; x < width; x++){

			var index = (x + y * width) * 4;

			pixels[index + 0]=255; // RED VALUE
			pixels[index + 1]=0; // GREEN VALUE
			pixels[index + 2]=0; // BLUE VALUE
			pixels[index + 3]=255; // ALPHA VALUE

		}
	}

	updatePixels();

```