//rules: the user clicks on the screen and a circle with a random circle will appear. The user can reset the canvas by clicking the space button

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0,0,0);
}

function draw() {
} //when the user clicked, a cirlce appears on the screen
function mouseClicked() {

  //circles have random colors
  var randomColor = color(random(255), random(255), random(255));
  fill(randomColor);

  ellipse(mouseX, mouseY, 100, 100);
  noStroke()
}

//canvas turns black when space is clicked (reset)
function keyPressed() {
  if (key === ' ') {
    background(0,0,0);
  }
}
