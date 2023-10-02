let fish;

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  //size of the fish
  fish = new Fish(width / 2, height / 2, 2, 60);
}

function draw() {
  background(0, 95, 204);
  
  fish.update();
  fish.render();
  fish.wallCheck(); 
}

class Fish {
  constructor(x, y, speed, size) {
    this.eyecol = color(0,0,0)
    this.fishcolor = color (255, 153, 0)
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.size = size; 
    this.direction = 1; 
  }
  
  update() {
      this.x += this.speed * this.direction;
  }


  render() {
    rectMode(CENTER);
    
    if (this.direction === 1) {
      // fish facing right
      fill(this.fishcolor)
      noStroke()
      ellipse(this.x, this.y, this.size, this.size / 2);
      
      fill(this.eyecol)
      ellipse(this.x + this.size / 4, this.y - this.size / 6, this.size / 6, this.size / 6);
      
      fill(this.fishcolor)
      triangle(
        this.x - this.size / 2,
        this.y,
        this.x - this.size,
        this.y - this.size / 4,
        this.x - this.size,
        this.y + this.size / 4
        
      );
     
    } else {
      
      // fish flipped
      push() ;
      scale(-1, 1); 
      fill(this.fishcolor)
      ellipse(-this.x, this.y, this.size, this.size / 2);
      triangle(
        -this.x - this.size / 2,
        this.y,
        -this.x - this.size,
        this.y - this.size / 4,
        -this.x - this.size,
        this.y + this.size / 4
      );
       pop();
      fill(this.eyecol); 
    ellipse(this.x + this.direction * this.size / 4, this.y - this.size / 6, this.size / 6, this.size / 6); // Eye
    }
  }

 //check when the fish hits the wall, it flips and reverse direction
  wallCheck() {
    if (this.x > width - this.size / 2 || this.x < this.size / 2) {
  
  //reverse direction
      this.direction *= -1;
    }
  }
}
