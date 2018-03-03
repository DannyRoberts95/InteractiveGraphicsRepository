# Pixel Location
	
	This sketch depicts Perlin Noise.

	The bright value is assigned as a perline noise variable (between 0 and 1) and is then mapped between 0 and 255 to act as an RBG value. 


```js

	var bright = map(noise(xoff,yoff),0,1,0,255);

	var index = (x + y * width) * 4;
			
	pixels[index + 0]=bright; // RED VALUE
	pixels[index + 1]=bright; // GREEN VALUE
	pixels[index + 2]=bright; // BLUE VALUE
	pixels[index + 3]=255; // ALPHA VALUE

	xoff += 0.01;

```