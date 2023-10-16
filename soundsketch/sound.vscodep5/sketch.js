let cowImage;
let chickenImage;
let sheepImage;
let cowSound;
let chickenSound;
let sheepSound;

function preload() {
  //preload images
  cowImage = loadImage('cow.jpg');
  chickenImage = loadImage('chicken.jpg');
  sheepImage = loadImage('sheep.jpg');

  //preloadsounds
  cowSound = loadSound('cow.mp3');
  chickenSound = loadSound('chicken.mp3');
  sheepSound = loadSound('sheep.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);

  //resize images
  cowImage.resize(200, 0);
  chickenImage.resize(150, 0);
  sheepImage.resize(200, 0);
}

function draw() {
  background(255);

  //display images
  image(cowImage, 50, height / 2 - cowImage.height / 2);
  image(chickenImage, width / 2 - 50 - chickenImage.width, height / 2 - chickenImage.height / 2);
  image(sheepImage, width - 150 - sheepImage.width, height / 2 - sheepImage.height / 2);
}

function mousePressed() {

  //plays sound when images are clicked
  if (mouseX >= 50 && mouseX <= 50 + cowImage.width && mouseY >= height / 2 - cowImage.height / 2 && mouseY <= height / 2 + cowImage.height / 2) {
    cowSound.play();
  } else if (mouseX >= width / 2 - 50 - chickenImage.width && mouseX <= width / 2 - 50 && mouseY >= height / 2 - chickenImage.height / 2 && mouseY <= height / 2 + chickenImage.height / 2) {
    chickenSound.play();
  } else if (mouseX >= width - 150 - sheepImage.width && mouseX <= width - 150 && mouseY >= height / 2 - sheepImage.height / 2 && mouseY <= height / 2 + sheepImage.height / 2) {
    sheepSound.play();
  }
}
