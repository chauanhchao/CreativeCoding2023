let position;
let velocity;
let size;
let bounce;

function setup() {
  createCanvas(windowWidth, windowHeight);

  size = createVector(50, 50);
  position = createVector(3, random(30));
  velocity = createVector(2, 0);
  bounce = false;
  
  noStroke();
  fill(255, 203, 61);
}

function draw() {
  background(255, 50); // Illusion of motion
  
  ellipse(position.x, position.y, size.x, size.y);

  // Ball goes down vertically
  velocity.y += 0.5;
  position.add(velocity);

  // Ball hits the ground
  if (position.y >= height - size.y / 2) {
    position.y = height - size.y / 2; // Ball stays on the page
    velocity.y *= -0.8; // Reduce speed
  }

  // If not bouncing, bounce randomly
  if (bounce) {
    if (random(5) < 0.01) {
      velocity.y = 3;
    }
  }

  // Ball moves horizontally
  position.x += velocity.x;
  if (position.x > width + size.x / 2) {
    position.x = -size.x / 2; // Ball appears on the other side of the screen
  }
}
