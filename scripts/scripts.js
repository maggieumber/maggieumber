var bluesuit, bluesuit2, shop270, sosf, tc, inprint, sm, am4, shirleyJackson;
var bio;

function preload() {
	bluesuit = loadAnimation('assets/bluesuitsmall_0000.png', 'assets/bluesuitsmall_0005.png');
	shop270 = loadAnimation('assets/shopsmall_0001.png', 'assets/shopsmall_0009.png');
	shop270.looping = false;
	am4 = loadAnimation('assets/amsmall-0000.png', 'assets/amsmall-0009.png');
	tc = loadAnimation('assets/timecapsulesmall_0000.png', 'assets/timecapsulesmall_0005.png');
	tc.playing = false;
	/*
		sosf = loadAnimation('assets/sound-of-snow-fallingsmall-0000.png', 'assets/sound-of-snow-fallingsmall-0001.png');
		inprint = loadAnimation('images/shades-of-skysmall-0000.png', 'images/shades-of-skysmall-0001.png');
		sm = loadAnimation('images/startled-maggiesmall-0000.png', 'images/startled-maggiesmall-0001.png');
		shirleyJackson = loadAnimation('images/the-shirley-jackson-projectsmall-0000.png', 'images/the-shirley-jackson-projectsmall-0001.png');
		*/
	bio = 'MAGGIE UMBER cartoonist, painter, printmaker, publisher at 2dcloud';
}

function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
	background(255, 255, 255);

	for (var i = 400; i < 1000; i += 10) {
		line(400, i, width, i);
	}

	//playing an pausing an animation
	if (mouseIsPressed)
		bluesuit.play();
	else
		bluesuit.stop();

	//reading and changing the current frame
	if (am4.getFrame() == am4.getLastFrame())
		am4.changeFrame(7);

	//playing backward or forward toward a specific frame
	//returns to the initial frame if click and hold

	if (mouseIsPressed)
		shop270.goToFrame(0);
	else
		shop270.goToFrame(shop270.getLastFrame());

	animation(bluesuit, 100, 150);
	animation(shop270, 400, 150);
	animation(am4, 700, 150);
	animation(tc, 1000, 150);
	/*
		animation(sosf, 500, 150);
		animation(inprint, 900, 150);
	*/

	textFont("Cabin Sketch");
	fill(50);
	textSize(20);
	text(bio, 50, 400, 250, 250); // Text wraps within text box
}

function mousePressed() {
	//rewind on mouse pressed - change frame to 0
	am4.rewind();

	//move ahead one frame
	tc.nextFrame();
	//glitch.previousFrame();
}