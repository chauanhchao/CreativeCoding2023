function setup() {
  createCanvas(400, 450)
}

function draw() {

  background(102, 125, 108);

   fill(255, 210, 185); 
   ellipse(200, 200, 200, 200);

  fill(255, 210, 185); 
  rect(190, 300, 30, 20); 

  fill(245, 140, 196); 
  arc(200, 450, 200, 280, PI, 0, CHORD);

   fill(0); 
   ellipse(150, 180, 20, 20);
   ellipse(250, 180, 20, 20);
 
   stroke(1);
   fill(196, 81, 84); 
   arc(200, 240, 50, 40, 0, PI);

  fill(171, 155, 144); 
  arc(200, 150, 180, 100, PI, 0, CHORD);

  fill(250, 205, 175);
  triangle(200, 190, 210, 210, 190, 210);

  fill(171, 155, 144); 
  ellipse(290, 265, 30, 30);
  ellipse(295, 290, 25, 25);
  ellipse(300, 310, 20, 20);

  fill(171, 155, 144); 
  ellipse(110, 265, 30, 30);
  ellipse(105, 290, 25, 25);
  ellipse(100, 310, 20, 20);

  fill(255, 210, 185); 
  arc(100, 200, 30, 40, HALF_PI, PI + HALF_PI); 
  arc(300, 200, 30, 40, PI + HALF_PI, HALF_PI);

  stroke(2); 
  fill(171, 155, 144);
  arc(150, 165, 30, 10, PI, 0); 
  arc(250, 165, 30, 10, PI, 0); 
}