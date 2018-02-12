function setup(){

	createCanvas(400,400);
	pixelDensity(1);
	
}

function draw(){

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

}
