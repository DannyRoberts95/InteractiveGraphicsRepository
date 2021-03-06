var bright;

function setup(){

	frameRate(1);
	createCanvas(400,400);
	pixelDensity(1);
	noiseDetail();
	
}

function draw(){

	loadPixels();

	for(var y = 0; y<height; y++){

		for(var x = 0; x < width; x++){

			bright = random(255);

			var index = (x + y * width) * 4;
			
			pixels[index + 0]=bright; // RED VALUE
			pixels[index + 1]=bright; // GREEN VALUE
			pixels[index + 2]=bright; // BLUE VALUE
			pixels[index + 3]=255; // ALPHA VALUE

		}
	}

	updatePixels();

}
