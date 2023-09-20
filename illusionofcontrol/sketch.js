let x, y; 
let size;
let bounce;

function setup() {
  createCanvas(windowWidth, windowHeight);

  size = 50
  x = 3
  y = random (30);
  yDir = 0;
  xDir=0
  
  noStroke();
  fill(255, 203, 61);
}

function draw() {
  background(255,50);//illusion of motion)
  
   ellipse(x, y, size);

  //balls goes down vertically
  yDir += 0.5;
  y += yDir;

  // ball hits the ground
  if (y >= height - size / 2) {
    y = height - size / 2; // ball stays in the page
    yDir *= -0.8; // reduce speed
    ;
  }


  // if not bouncing, bounce randomly
  if (bounce) {
    if (random(5) < 0.01) { 
      ySpeed = 3; 
    }
  }

  // ball moves horizontally
  x += 2; 
  if (x > width + size / 2) {
    x = -size / 2; // ball comes the screen from the other side
  }
}
