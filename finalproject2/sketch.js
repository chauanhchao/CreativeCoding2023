let cards = [];
let tarotImage;
let predictionImages = [];
let cardWidth = 80;
let cardHeight = 120;
let padding = 20;
let cols = 4;
let rows = 3;
let selectedCard = null;
let predictionWidth = 200;
let predictionHeight = 300;
let predictionX = padding;
let backgroundImage;


function preload() {
  tarotImage = loadImage('tarot.png');
  for (let i = 0; i < 12; i++) {
    predictionImages.push(loadImage(`tarotcard${i + 1}.png`));
  }
  backgroundImage = loadImage('background.jpg');
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Move the cards display to the left and down
  let offsetX = 270;
  let offsetY = 100;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      let x = j * (cardWidth + padding) + padding + cardWidth / 2 + offsetX;
      let y = i * (cardHeight + padding) + padding + cardHeight / 2 + offsetY;
      let cardNumber = i * cols + j + 1;
      cards.push(new TarotCard(x, y, cardNumber));
    }
  }
}

function draw() {
  imageMode(CENTER);
  image(backgroundImage, width / 2, height / 2);

  if (selectedCard !== null) {
    displayPrediction(selectedCard);
  } else {
    for (let card of cards) {
      card.display();
    }
  }
}

function mouseClicked() {
  for (let card of cards) {
    if (card.contains(mouseX, mouseY)) {
      selectedCard = card.getCardNumber();
      break;
    }
  }
}

function displayPrediction(cardNumber) {
  // Keeping the background image
  image(backgroundImage, width / 2, height / 2);

  let predictionImage = predictionImages[cardNumber - 1];
  let predictionX = width / 2 ; // Adjusted X position for the prediction card
  let predictionY = height / 2 + 20; // Adjusted Y position for the prediction card

  image(predictionImage, predictionX, predictionY, predictionWidth, predictionHeight);

  let textBoxSize = 150;
  let textBoxX = width / 2 + predictionWidth + padding; // Adjusted X position for the text box
  let textBoxY = height / 2 - 50; // Adjusted Y position for the text box (moved up by 50 pixels)
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
