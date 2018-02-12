var yoff = 1000.0;

function setup(){

	frameRate(1);
	createCanvas(400,400);
	pixelDensity(1);
	noiseDetail(10);
	
}

function draw(){

	loadPixels();

	for(var y = 0; y<height; y++){

		var xoff = 100.0;

		for(var x = 0; x < width; x++){

			var index = (x + y * width) * 4;

			var bright = map(noise(xoff,yoff),0,1,0,255);

			pixels[index + 0]=bright; // RED VALUE
			pixels[index + 1]=bright; // GREEN VALUE
			pixels[index + 2]=bright; // BLUE VALUE
			pixels[index + 3]=255; // ALPHA VALUE

			xoff += 0.01;

		}

		yoff += 0.01;
	}

	updatePixels();

}
