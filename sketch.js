function setup() {
  createCanvas(600, 400);
}

  
function draw() {
  background(33, 29, 27);
  
  //table
  stroke(110, 88, 76)
  fill(110, 88, 76); // table
  rect(0, 250, 600,100);
  
  fill(64, 51, 44); // table side
  noStroke();
  rect(0, 350, 600,30);
  
  //shadows
  fill(41, 36, 29); 
  noStroke(); 
  ellipse(290,290, 230, 40); 
  
  fill(41, 36, 29); 
  noStroke(); 
  ellipse(100,320, 100, 40); 
  
  fill(41, 36, 29); 
  noStroke(); 
  ellipse(500, 280, 100, 40); 
  
  fill(41, 36, 29); 
  noStroke(); 
  ellipse(500, 310, 100, 20); 
  
  fill(41, 36, 29); 
  noStroke(); 
  ellipse(490, 334, 100, 30); 
  
   fill(41, 36, 29); 
  noStroke(); 
  ellipse(350, 334, 100, 30); 
  
  //water melon
  fill(44, 74, 34); // green part
  noStroke();
  arc(200, 180, 280, 280, 0, PI, PIE);
  
  
  fill(161, 196, 149); // light green part
  noStroke();
  arc(200, 180, 250, 250, 0, PI, PIE); 

  fill(247, 255, 242); // white part
  noStroke();
  arc(200, 180, 220, 220, 0, PI, PIE); 
  
  
  fill(222, 65, 60); // 
  arc(200, 180, 200, 200, 0, PI, PIE); // red part
  
  noFill(0)
  strokeWeight(15)
  stroke(117, 35, 34)
  arc(200, 200, 160, 80, 0, PI); 

  //seeds
  fill(0);
  strokeWeight(1)
  stroke(0)
  ellipse(190, 230, 2, 6);
  ellipse(200, 235, 2, 5); 
  ellipse(230, 230, 2, 6); 
  ellipse(160, 230, 2, 6);
  ellipse(180, 240, 2, 6);
  ellipse(190, 245, 2, 5); 
  ellipse(170, 240, 2, 6); 
  ellipse(200, 240, 2, 6);
  ellipse(250, 240, 2, 6);
  ellipse(260, 220, 2, 5); 
  ellipse(220, 240, 2, 6); 
  ellipse(240, 240, 2, 6);
  ellipse(270, 210, 2, 6);
  ellipse(260, 220, 2, 6);
  ellipse(255, 240, 2, 5); 
  ellipse(260, 280, 2, 5); 
  

  
  //water melon on the table
  fill(222, 68, 67); 
  strokeWeight(0)
  stroke(222, 68, 67)
  ellipse(210, 325, 30, 20);
  
  fill(222, 65, 60); 
  strokeWeight(0)
  stroke(222, 65, 60)
  ellipse(200, 180, 200, 40);
  
  //seeds upper
  fill(0);
  strokeWeight(1)
  stroke(0)
   ellipse(190, 190, 5, 2); 
  ellipse(170, 180, 5, 3); 
  ellipse(190, 175, 5, 3);
  ellipse(200, 175, 2, 6);
  ellipse(220, 180, 5, 3);
  ellipse(210, 175, 6, 2);
  
  //seeds on table
   fill(0);
  strokeWeight(1)
  stroke(0)
   ellipse(170, 320, 5, 2); 
   ellipse(165, 320, 5, 2); 
  ellipse(190, 330, 5, 3); 
  ellipse(190, 325, 5, 3);
  ellipse(200, 315, 6, 2);
  ellipse(200, 330, 5, 3);
  ellipse(220, 330, 6, 2);
  
      //line
  stroke(36, 59, 33)
  strokeWeight(5);
  noFill();
  line(50, 250, 60, 210)
  
  stroke(51, 84, 46)
  strokeWeight(5);
  noFill();
  line(30, 250, 60, 210)
  
  stroke(53, 94, 47)
  strokeWeight(5);
  noFill();
  line(60, 210, 150, 150)
  
  stroke(38, 48, 36)
  strokeWeight(5);
  noFill();
  line(150, 150, 300, 120)
  
   stroke(70, 94, 65)
  strokeWeight(5);
  noFill();
  line(80, 200, 110, 150)
  
  
  
  //apple 1
  fill(122, 43, 26); 
  noStroke(); 
  ellipse(390,250, 80, 75); 
  
  fill(171, 87, 51); 
  noStroke(); 
  ellipse(395,260, 50, 50); 
  
  fill(56, 34, 3); 
  noStroke(); 
  ellipse(400,260, 3, 3); 
    
  //apple 2
  fill(140, 46, 25); 
  noStroke(); 
  ellipse(480,260, 75, 72); 
  
  fill(56, 34, 3); 
  noStroke(); 
  ellipse(470,265, 3, 3); 
  
  //green grapes
 
    // grapes dark
  fill(79, 92, 63)
  ellipse(340, 340, 20, 20);
  ellipse(300, 335, 20, 20);
  ellipse(340, 290, 20, 20);
  ellipse(280, 390, 20, 20)
  ellipse(370, 300, 20, 20);
  ellipse(380, 310, 20, 20);
  ellipse(300, 360, 20, 20)
  
   //grapes medium
  fill(118, 133, 70); 
  ellipse(300, 350, 20, 20);
  ellipse(320, 330, 20, 20);
  ellipse(300, 320, 20, 20);
  ellipse(320, 360, 20, 20);
  ellipse(320, 310, 20, 20);
  ellipse(280, 340, 20, 20);
  ellipse(280, 350, 20, 20);
  ellipse(280, 350, 20, 20);
  ellipse(260, 370, 20, 20);
  ellipse(265, 340, 20, 20);
  ellipse(280, 360, 20, 20);
  ellipse(320, 340, 20, 20);
  ellipse(300, 335, 20, 20);
  ellipse(340, 290, 20, 20);
  ellipse(340, 310, 20, 20);
  ellipse(355, 300, 20, 20);
  ellipse(370, 310, 20, 20);
  ellipse(280, 380, 20, 20);
    //grapes light
  fill(182, 196, 137); 
  ellipse(300, 300, 20, 20);
  ellipse(320, 300, 20, 20);
  ellipse(300, 320, 20, 20);
  ellipse(320, 320, 20, 20);
  ellipse(330, 330, 20, 20);
  ellipse(280, 320, 20, 20);
  ellipse(280, 320, 20, 20);
  ellipse(280, 340, 20, 20);
  ellipse(260, 360, 20, 20);
  ellipse(265, 330, 20, 20);
  ellipse(280, 320, 20, 20);
  ellipse(350, 320, 20, 20);
  
    fill(239, 245, 235); 
  ellipse(295, 300, 2, 2);
  ellipse(315, 300, 2, 2);
  ellipse(295, 320, 2, 2);
  ellipse(315, 320, 2, 2);
  ellipse(325, 330, 2, 2);
  ellipse(275, 320, 2, 2);
  ellipse(275, 320, 2, 2);
  ellipse(275, 340, 2, 2);
  ellipse(255, 360, 2, 2);
  ellipse(260, 330, 2, 2);
  ellipse(275, 320, 2, 2);
  ellipse(345, 320, 2, 2);
 
  //purple grapes 2
  fill(39, 34, 48); 
  ellipse(40, 240, 20, 20);
  ellipse(40, 230, 20, 20);
  ellipse(40, 220, 20, 20);
  ellipse(50, 240, 20, 20);
  ellipse(60, 240, 20, 20);
  ellipse(30, 200, 20, 20);
  ellipse(20, 240, 20, 20);
  ellipse(25, 230, 20, 20);
  ellipse(25, 250, 20, 20);
  ellipse(30, 210, 20, 20);
  ellipse(35, 210, 20, 20);
  ellipse(35, 220, 20, 20);
  ellipse(15, 210, 20, 20);
  ellipse(15, 260, 20, 20);
  ellipse(20, 250, 20, 20);
  ellipse(90, 250, 20, 20);
  ellipse(10, 230, 20, 20);
  ellipse(15, 230, 20, 20);
  
  fill(220, 218, 232); 
  ellipse(40, 240, 3, 3);
  ellipse(40, 230, 3, 3);
  ellipse(30, 200, 3, 3);
  ellipse(20, 240, 3, 3);
  
  //cantaloupe
  
  //dark green
    fill(77, 82, 56); // green part
  noStroke();
  arc(70, 290, 120, 100, 0, PI, PIE); 
  
  //light green part
  fill(169, 186, 99); 
  noStroke(); 
  ellipse(70,280, 120, 65);
  
  //light green part
  fill(231, 232, 188); 
  noStroke(); 
  ellipse(70,280, 80, 40);
  
  //seeds cantaloupe
   fill(222, 180, 106);
  strokeWeight(1)
  stroke(222, 180, 106)
   ellipse(70, 280, 5, 2); 
   ellipse(60, 290, 5, 2); 
  ellipse(65, 295, 5, 3); 
  ellipse(75, 280, 5, 3);
  ellipse(80, 300, 6, 2);
  ellipse(85, 300, 5, 3);
  ellipse(70, 290, 6, 2);
   ellipse(90, 280, 5, 2); 
   ellipse(90, 290, 5, 2); 
  ellipse(85, 293, 5, 3); 
  ellipse(93, 283, 5, 3);
  ellipse(62, 300, 6, 2);
  ellipse(65, 290, 5, 3);
  ellipse(80, 300, 6, 2);
  ellipse(63, 280, 5, 2); 
   ellipse(53, 290, 5, 2); 
  ellipse(78, 295, 5, 3); 
  ellipse(67, 280, 5, 3);
  ellipse(40, 290, 6, 2);
  ellipse(45, 286, 5, 3);
  ellipse(45, 290, 6, 2);
   ellipse(50, 280, 5, 2); 
   ellipse(69, 292, 5, 2); 
  ellipse(67, 288, 5, 3); 
  ellipse(66, 289, 6, 2);
  ellipse(71, 290, 5, 3);
  ellipse(74, 300, 6, 2);
  
    ellipse(71, 310, 5, 3);
  ellipse(74, 312, 6, 2);
  
   ellipse(60, 340, 5, 3);
  ellipse(55, 342, 6, 2);
   ellipse(65, 340, 5, 3);
  ellipse(100, 342, 6, 2);
  
  //purple grapes 1
  
  fill(43, 40, 61); 
  strokeWeight(0)
  stroke(43, 40, 61)
  ellipse(100, 200, 20, 20);
  ellipse(100, 220, 20, 20);
  ellipse(80, 200, 20, 20);
  ellipse(80, 220, 20, 20);
  ellipse(90, 240, 20, 20);
  ellipse(70, 260, 20, 20);
  ellipse(70, 240, 20, 20);
  ellipse(80, 230, 20, 20);
  ellipse(75, 250, 20, 20);
  ellipse(85, 210, 20, 20);
  ellipse(120, 210, 20, 20);
  ellipse(120, 220, 20, 20);
  ellipse(110, 210, 20, 20);
  ellipse(110, 200, 20, 20);
  ellipse(100, 230, 20, 20);
  ellipse(90, 250, 20, 20);
  ellipse(110, 230, 20, 20);
  ellipse(125, 230, 20, 20);
  
  fill(234, 233, 240); 
  ellipse(95, 200, 3, 3);
  ellipse(95, 220, 3, 3);
  ellipse(75, 200, 3, 3);
  ellipse(75, 220, 3, 3);
  ellipse(85, 240, 3, 3);
  ellipse(65, 260, 3, 3);
  
  
//purple leaves grape
  fill(62, 99, 59);
  noStroke(); 
  triangle(110, 150, 120, 100, 160, 100);
  
  fill(79, 117, 76);
  noStroke(); 
  triangle(70, 190, 70, 140, 40, 160);
  
  fill(88, 140, 83);
  noStroke(); 
  triangle(65, 210, 65, 190, 45, 210);
  
  fill(62, 99, 59);
  noStroke(); 
  triangle(220, 140, 180, 80, 240, 100);
  
  fill(64, 115, 60);
  noStroke(); 
  triangle(220, 160, 200, 120, 140, 160);
  

// more lines
  noFill(0)
  strokeWeight(2)
  stroke(62, 79, 47)
  arc(375, 290, 25, 10, 0, PI); 
  
    noFill(0)
  strokeWeight(2)
  stroke(62, 79, 47)
  arc(400, 290, 25, 10, 0, PI); 
  
//more leaves
    fill(64, 115, 60);
  noStroke(); 
  triangle(420, 250, 480, 280, 400, 310);
  
  
  fill(46, 112, 40);
  noStroke(); 
  triangle(500, 360, 500, 260, 400, 330);
  
}
