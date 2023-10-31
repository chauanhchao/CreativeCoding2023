let parsed;
let countries = [];
let balls = []; 
let randomcountrydata = [];
let speedslider;

function preload() {
  data = loadJSON("data.json", cleanIt);
  backgroundImage = loadImage("bg.jpg"); 
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  speedslider = createSlider(1, 5, 2, 0.5); 
  speedslider.position(10, 20); 

  image(backgroundImage, 0, 0, width, height);

  
  //set up balls
  for (let i = 0; i < 10; i++) {
    let x = random(width); 
    let y = random(height); 
    let radius = random(50, 100); 

    let col = color(255, 192, 203); 

    let speedX = random(-2, 2);
    let speedY = random(-2, 2);

    balls.push({ x, y, radius, col, speedX, speedY });
  }

//10 data from random countries
  for (let i = 0; i < 10; i++) {
    let randomIndex = floor(random(countries.length));
    randomcountrydata.push(countries[randomIndex]);
  }

  for (let i = 0; i < 10; i++) {
    let x = random(width); 
    let y = random(height); 
    let radius = random(50, 100); 

    let col = color(117, 191, 255); 

    
    let speedX = random(-2, 1);
    let speedY = random(-2, 1);

    balls.push({ x, y, radius, col, speedX, speedY }); 
  }

  //10 data from random countries
  for (let i = 0; i < 10; i++) {
    let randomIndex = floor(random(countries.length));
    randomcountrydata.push(countries[randomIndex]);
  }
}

function draw() {

  image(backgroundImage, 0, 0, width, height);

  for (let ball of balls) {
    fill(ball.col);
    noStroke();
    ellipse(ball.x, ball.y, ball.radius * 2, ball.radius * 2); 

    ball.x += ball.speedX;
    ball.y += ball.speedY;

    //reverse direction when hit edges
    if (ball.x - ball.radius < 0 || ball.x + ball.radius > width) {
      ball.speedX *= -1;
    }

    if (ball.y - ball.radius < 0 || ball.y + ball.radius > height) {
      ball.speedY *= -1;
  }
}

 //adjust speed using the ball
  for (let ball of balls) {
    let speed = speedslider.value();
    ball.x += ball.speedX * speed;
    ball.y += ball.speedY * speed;
  }

  //show data on balls
  textSize(12);
  fill(0);
  for (let i = 0; i < balls.length; i++) {
    let countryName = randomcountrydata[i][0];
    let internetGG = randomcountrydata[i][1].info.ground_truth_internet_gg;
    text(`${countryName}: ${internetGG}`, balls[i].x, balls[i].y);
  }
}

function cleanIt() {
  // convert relevant data to string
  let countrydata = JSON.stringify(data.data);
  countrydata = countrydata.replaceAll(/202206/g, "info");
  let parsedcountry = JSON.parse(countrydata);
  for (let i in parsedcountry) {
    countries.push([i, parsedcountry[i]]);
  }
}
