# Polar Rotation

This sketch depicts a circle rotating using polar co ordinates. As the cirle rotates, the radius is decremented
which results in a spiral.

Below the variables for radius, x and y are instanciated. Theta is the greek notation for an angle in any given case.

```js
var r = 150;
var theta = 0;
var x;
var y;

```
Below x and y are set using the Sine and Cosine functions. Using the sine and cosine rules we can find the polar values of x and y. For example, in the case of x the cosine of theta is equal to x devided by r. By multiplying the whole equation by r, we isolate x and make it equal to r multiplied by the cosine of theta. This gives us our x value for the ellipse.

cosine(theta) = x/r   ->   x = r * cosine(theta)
sine(theta)   = y/r   ->   y = r * sine(theta)

```js
	x = r * cos(theta);
    y = r * sin(theta);

```
After assigning X and Y values, we draw the ellipse, increment theta so as to rotate the ellipse around the origin, and we decrement radius so the rotation spirals inward.

js```
	push();
    translate(width/2,height/2);
    noStroke();
    fill(0);
    ellipse(x, y, 10, 10);
    pop();


    theta += 0.03;
    r -= 0.05;

```
