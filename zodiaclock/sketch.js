function setup() {
  createCanvas(windowWidth, windowHeight);
}

let AriesStars = [
  { x: 152, y: 183 },
  { x: 83, y: 208 },
  { x: 152, y: 183 },
  { x: 184, y: 185 },
  { x: 201, y: 193 }
];

let TaurusStars = [
  { x: 703, y: 48 },
  { x: 751, y: 101 },
  { x: 751, y: 152 },
  { x: 663, y: 120 },
  { x: 751, y: 152 },
    { x: 784, y: 140 },
  { x: 751, y: 101 },
  { x: 784, y: 140 },
  { x: 823, y: 157 },
  { x: 836, y: 171},
];

let CancerStars = [
  { x: 380, y: 50 },
  { x: 382, y: 94 },
  { x: 398, y: 113 },
  { x: 366, y: 163 },
  { x: 398, y: 113 },
  { x: 423, y: 134 },
];

let GeminiStars = [
  { x: 244, y: 251 },
  { x: 248, y: 283 },
  { x: 196, y: 289 },
  { x: 248, y: 283 },
  { x: 244, y: 337 },
  { x: 209, y: 360 },
  { x: 211, y: 398 },
  { x: 209, y: 360 },
  { x: 244, y: 337 },
  { x: 250, y: 369 },
  { x: 263, y: 399 },
  { x: 250, y: 369 },
  { x: 244, y: 337 },
  { x: 248, y: 283 },
  { x: 286, y: 277 },
  { x: 286, y: 246 },
    { x: 286, y: 277 },
  { x: 310, y: 273 },
  { x: 286, y: 277 },
  { x: 291, y: 335 },
  { x: 304, y: 352 },
  { x: 298, y: 387 },
    { x: 304, y: 352 },
  { x: 334, y: 376 },
];

let LeoStars = [
  { x: 72, y: 59 },
  { x: 99, y: 45 },
  { x: 121, y: 63 },
  { x: 114, y: 87 },
  { x: 77, y: 96 },
    { x: 66, y: 131 },
  { x: 159, y: 137 },
  { x: 217, y: 150 },
  { x: 185, y: 108 },
 { x: 114, y: 87 },
];

let VirgoStars = [
  { x: 535, y: 110 },
  { x: 550, y: 141 },
  { x: 568, y: 148 },
  { x: 568, y: 187 },
  { x: 550, y: 211 },
  { x: 566, y: 252 },
  { x: 591, y: 262 },
   { x: 566, y: 252 },
  { x: 550, y: 211 },
 { x: 623, y: 199 },
   { x: 615, y: 144 },
  { x: 568, y: 148 },
  { x: 634, y: 121 },
  { x: 618, y: 143},
   { x: 623, y: 199 },
  { x: 636, y: 209},
   { x: 657, y: 240 },
];

let LibraStars = [
  { x: 882, y: 229 },
  { x: 842, y: 267 },
  { x: 867, y: 306 },
  { x: 852, y: 323 },
  { x: 867, y: 306 },
  { x: 842, y: 267 },
  { x: 926, y: 245 },
  { x: 882, y: 229 },
 { x: 926, y: 245 },
  { x: 929, y: 286 },
  { x: 960, y: 322 },
];

let ScorpioStars = [
  { x: 66, y: 319 },
  { x: 91, y: 341 },
  { x: 95, y: 301 },
  {x: 91, y: 341},
  { x: 50, y: 339 },
  {x: 91, y: 341},
  { x: 116, y: 350 },
  { x: 119, y: 380 },
 { x: 103, y: 420 },
  { x: 140, y: 440 },
  { x: 162, y: 410 },
  { x: 143, y: 402 },
  { x: 143, y: 385 }
];

let SagittariusStars = [
  { x: 374, y: 246 },
  { x: 401, y: 278 },
  { x: 390, y: 312 },
  {x: 354, y: 305},
  { x: 329, y: 293 },
  {x: 354, y: 305},
  { x: 390, y: 312 },
  { x: 390, y: 334 },
 { x: 365, y: 342 },
{ x: 390, y: 334 },
  { x: 390, y: 312 },
  { x: 401, y: 278 },
  { x: 442, y: 269 },
  { x: 466, y: 284 },
  { x: 484, y: 261 },
  { x: 510, y: 256 },
  {x: 536, y: 265},
  { x: 516, y: 323 },
  {x: 519, y: 342},
  { x: 479, y: 339 },
  {x: 519, y: 342},
 { x: 485, y: 380 },
  { x: 485, y: 380 },
  {x: 519, y: 342},
  { x: 479, y: 339 },
   {x: 519, y: 342},
  { x: 516, y: 323 },
   {x: 536, y: 265},
  { x: 510, y: 256 },
   { x: 484, y: 261 },
  { x: 466, y: 284 },
   { x: 442, y: 269 },
   {x: 445, y: 225},
    {x: 414, y: 218},
  {x: 445, y: 225},
   { x: 470, y: 206 },
  { x: 478, y: 182 },  
];

let CapricornStars = [
  { x: 737, y: 395 },
  { x: 768, y: 391 },
  { x: 812, y: 401 },
  {x: 850, y: 405},
  { x: 869, y: 380 },
  {x: 850, y: 405},
  { x: 810, y: 461 },
  { x: 780, y: 450 },
 { x: 748, y: 413 },
   { x: 737, y: 395 },
];

let AquariusStars = [
  { x: 639, y: 454 },
  { x: 579, y: 415 },
  { x: 585, y: 453 },
  {x: 615, y: 499},
  { x: 585, y: 453 },
  {x: 579, y: 415},
  { x: 543, y: 420 },
  { x: 513, y: 401 },
 { x: 488, y: 409 },
   { x: 476, y: 423 },
   { x: 480, y: 480 },
  { x: 506, y: 462 },
 { x: 528, y: 481 },
   { x: 534, y: 524 }
]
let PiscesStars = [
  { x: 245, y: 465 },
  { x: 217, y: 486 },
  { x: 227, y: 511 },
  {x: 204, y: 537},
  { x: 170, y: 564 },
  {x: 227, y: 554},
  { x: 273, y: 534 },
  { x: 303, y: 543 },
 { x: 337, y: 528 },
   { x: 357, y: 552 },
   { x: 374, y: 535 },
  { x: 390, y: 544 },
 { x: 389, y: 566 },
   { x: 375, y: 575 },
   { x: 364, y: 570 },
   { x: 357, y: 552 }
];

function draw() {
  background(0, 0, 0);

  let currentHour = hour();

  if (currentHour === 1 || currentHour === 13){
    drawConstellation(AriesStars, color(255)); // 
  } else {
    drawConstellation(AriesStars, color(33, 33, 33)); // 
  }

   if (currentHour === 2 || currentHour === 14) {
    drawConstellation(TaurusStars, color(255)); // 
  } else {
    drawConstellation(TaurusStars, color(33, 33, 33)); 
  }
  
  if (currentHour === 3 || currentHour === 15) {
    drawConstellation(GeminiStars, color(255)); // 
  } else {
    drawConstellation(GeminiStars, color(33, 33, 33)); 
  }
 
    if (currentHour === 4 || currentHour === 16) {
    drawConstellation(CancerStars, color(255)); // 
  } else {
    drawConstellation(CancerStars, color(33, 33, 33)); 
  }
  
  if (currentHour === 5 || currentHour === 17) {
    drawConstellation(LeoStars, color(255)); // 
  } else {
    drawConstellation(LeoStars, color(33, 33, 33)); 
  }
  
  if (currentHour === 6 || currentHour === 18) {
    drawConstellation(VirgoStars, color(255)); // 
  } else {
    drawConstellation(VirgoStars, color(33, 33, 33)); 
  }
  
  if (currentHour === 7 || currentHour === 19) {
    drawConstellation(LibraStars, color(255)); // 
  } else {
    drawConstellation(LibraStars, color(33, 33, 33)); 
  }
  
   if (currentHour === 8 || currentHour === 20) {
    drawConstellation(ScorpioStars, color(255)); // 
  } else {
    drawConstellation(ScorpioStars, color(33, 33, 33)); 
  }
  
  if (currentHour === 9 || currentHour === 21) {
    drawConstellation(SagittariusStars, color(255)); // 
  } else {
    drawConstellation(SagittariusStars, color(33, 33, 33)); 
  }
  
  if (currentHour === 10 || currentHour === 22) {
    drawConstellation(CapricornStars, color(255)); // 
  } else {
    drawConstellation(CapricornStars, color(33, 33, 33)); 
  }

  if (currentHour === 11 || currentHour === 23) {
    drawConstellation(AquariusStars, color(255)); // 
  } else {
    drawConstellation(AquariusStars, color(33, 33, 33)); 
  }
  
  if (currentHour === 12 || currentHour === 24) {
    drawConstellation(Pisces, color(255)); // 
  } else {
    drawConstellation(PiscesStars, color(33, 33, 33)); 
  }


}

function drawConstellation(stars, starColor) {
  stroke(starColor);
  strokeWeight(1);

  for (let i = 0; i < stars.length - 1; i++) {
    line(stars[i].x, stars[i].y, stars[i + 1].x, stars[i + 1].y);
  }

  line(stars[stars.length - 1].x, stars[stars.length - 1].y, stars[0].x, stars[0].y);

  fill(starColor);
  for (let i = 0; i < stars.length; i++) {
    ellipse(stars[i].x, stars[i].y, 5, 5);
  }
}

