let field;
let t = "";
let x, y;
let but1;
let xSpeed, ySpeed;

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = random(width);
  y = random(height);
  xSpeed = random(5, 10);
  ySpeed = random(5, 10);

  //box to input name
  let input = createInput();
  input.position(20, 20);
  input.attribute("placeholder", "Enter your name");
  
  //create button
  but1 = createButton("Start");
  but1.position(input.x + input.width, 20);
  but1.mousePressed(startbounce);
}

 //name bounce randomly on the screen
function startbounce() {
  t = select("input").value();
  select("input").remove();
  select("button").remove();
  loop();
}

function draw() {
    background(255, 150, 168);
;

  if (t !== "") {
    textSize(32);
    fill(0);
    text(t, x, y);

    x += xSpeed;
    y += ySpeed;

    if (x > width || x < 0) {
      xSpeed *= -1;
    }

    if (y > height || y < 0) {
      ySpeed *= -1;
    }
  }

}