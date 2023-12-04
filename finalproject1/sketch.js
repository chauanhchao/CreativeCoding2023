let cards = [];
let tarotImage;
let predictionImages = [];
let cardWidth = 80;
let cardHeight = 120;
let padding = 20;
let cols = 4;
let rows = 3; 
let selectedCard = null;
//fixed size for predcition images
let predictionWidth = 200; 
let predictionHeight = 300; 
//position of prediction images


let predictionX = padding;
//preload images
function preload() {
  tarotImage = loadImage('tarot.png');
  for (let i = 0; i < 12; i++) {
    predictionImages.push(loadImage(`tarotcard${i + 1}.png`));
  }
}

function setup() {
  createCanvas(windowHeight, windowWidth);

  // creating 12 cards
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      let x = j * (cardWidth + padding) + padding + cardWidth / 2;
      let y = i * (cardHeight + padding) + padding + cardHeight / 2;
      let cardNumber = i * cols + j + 1; //assign number to each cards
      cards.push(new TarotCard(x, y, cardNumber));
    }
  }

  
}

function draw() {
  background(255);

  if (selectedCard !== null) {
    displayPrediction(selectedCard);
  } else {
    // display 12 tarot cards
    for (let card of cards) {
      card.display();
    }
  }
}

function mouseClicked() {
  // check if a card is clicked
  for (let card of cards) {
    if (card.contains(mouseX, mouseY)) {
      selectedCard = card.getCardNumber();
      break;
    }
  }
}

function displayPrediction(cardNumber) {
  background(255);

  // Display card prediction
  let predictionImage = predictionImages[cardNumber - 1];
  let x = padding; 
  let y = height / 10; 

  image(predictionImage, x, y, predictionWidth, predictionHeight);

  // display text box
  let textBoxSize = 150;
  let textBoxX = predictionWidth + padding * 2;
  let textBoxY = y;
  fill(0);
  rect(textBoxX, textBoxY, textBoxSize, textBoxSize); 
  fill(255);
  textSize(16);
  textAlign(LEFT, TOP);
  text("Your today prediction is...", textBoxX + 10, textBoxY + 10, textBoxSize - 20, predictionHeight - 20);
}


class TarotCard {
  constructor(x, y, cardNumber) {
    this.x = x;
    this.y = y;
    this.width = cardWidth;
    this.height = cardHeight;
    this.cardNumber = cardNumber;
  }

  display() {
    image(tarotImage, this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
  }

  contains(px, py) {
    return px > this.x - this.width / 2 && px < this.x + this.width / 2 &&
      py > this.y - this.height / 2 && py < this.y + this.height / 2;
  }

  getCardNumber() {
    return this.cardNumber;
  }
}

