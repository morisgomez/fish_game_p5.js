let x = 400;
let y = 200;
let xFish = 50;
let yFish = 30;
let fish;
let pixelBot; //global variable to access it throughout program.
 
function preload() //helps load all media files.
{
  pixelBot = loadImage ('assets/penguin.png');
  fish = loadImage ('assets/fish.png'); 
}  //closes preload function.

function setup() {
  createCanvas(800, 400);
} //closes setup funcon.

function draw() { 
  background("pink");
  image(pixelBot, x, y);
  image(fish, xFish, yFish);
  if (keyIsDown(UP_ARROW)) {
    y = y - 5;
  } else if (keyIsDown(DOWN_ARROW)) {
    y = y + 5;
  } else if (keyIsDown(RIGHT_ARROW)) {
    x = x + 5;
  } else if (keyIsDown(LEFT_ARROW)) {
    x = x - 5;
  }
  
  if (x === xFish || y === yFish)
    {
      textAlign(CENTER);
      textSize(32);
      text("you ate the fish!", 400, 200);
    }
} //closes draw function.