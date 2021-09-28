img = "";
noseX = 0;
noseY = 0;
marioX = 0;
marioY = 0;
GameStatus = "";

function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(650, 400);
	canvas.parent('canvas');

	instializeInSetup(mario);

	video = createCapture(VIDEO);
	video.size(800,400);
	video.parent('game_console');

	poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on('pose', gotPoses);
}

function draw() {
	game()
}

function modelLoaded() {
	console.log('Model Loaded!')
}

function gotPoses(results)
{
	if(results.length > 0)
	{
		noseX = results[0].pose.nose.x;
		noseY = results[0].pose.nose.y;
	}
}

function game(){

	console.log("noseX = " + noseX +"noseY = " + noseY)
	instializeInDraw();
	moveEnvironment(mario);
	drawSprites();
}