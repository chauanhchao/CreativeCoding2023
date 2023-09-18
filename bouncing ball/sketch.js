let x, y; // ball x and y position
let xDir, yDir; // direction of the ball
let size; // size of the ball
let ballcolor; 

function setup() {
  createCanvas(windowWidth, windowHeight);

  // random directions
  xDir = random(-10, 10);
  yDir = random(-10, 10);

  size = (200);

  x = random(size, width - size);
  y = random(size, height - size);
  noStroke();
  ballcolor = color(255, 0, 195);
}

function draw() {

  background(255, 50);
  // draw our ball
  fill(ballcolor);
  ellipse(x, y, size);

  // if the ball touches the left or right side
  if (x >= width - size / 2 || x <= size / 2) {
    // reverse its direction
    xDir = xDir * -1;
    
    //ball decreases in size
    size *= 0.8; 
    
    //ball changes color
    ballcolor = color(random(255), random(255), random(255));
  }

  // if the ball touches the ceiling or floor
  if (y >= height - size / 2 || y <= size / 2) {
    yDir = yDir * -0.98;
    
    //ball decreases in size
    size *= 0.8; 
         
    //ball changes color
    ballcolor = color(random(255), random(255), random(255));
  }

  // update the position of the ball for the next loop
  x = x + xDir;
  y = y + yDir;
}
 