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
let playAgainButton;
let showExplanation = true;
let explanationButton;
let soundEffect;
//array for card predcition texts
let predictionTexts = [
  "The Sun\nWow! You’re going to have a day filled with positivity, success, and vitality. The Sun suggests happiness, clarity, and achievement in your endeavors.",
  "The Lovers\nIndicates choices and relationships. You may face decisions regarding partnerships or important connections. Embrace harmony and balance in your relationships.",
  "Death\nThis card often represents transformation and change. It suggests the end of one phase and the beginning of another, encouraging you to embrace change for growth.",
"The Devil\nSignifies temptations and limitations. Be cautious of any unhealthy patterns or attachments that may hinder your progress. It's a reminder to focus on freedom from negative influences.",
"The World\nSymbolizes fulfillment and completion. This card indicates a sense of accomplishment, achievement, and reaching a significant milestone or goal.",
"The Magician\nSymbolizes fulfillment and completion. This card indicates a sense of accomplishment, achievement, and reaching a significant milestone or goal.",
"The Moon\nSuggests intuition and the subconscious. Pay attention to your inner feelings and trust your instincts, even if things seem unclear or mysterious.",
"The Emperor\nStands for authority and structure. This card advises taking a disciplined and organized approach to situations. It's about establishing order and leadership.",
"The Star\nSymbolizes hope, inspiration, and healing. It brings optimism and encourages you to have faith in the future.",
"The Tower\nRepresents sudden change or upheaval. It could signify a significant shake-up or disruption in your life, which might lead to a new perspective or understanding.",
"Judgement\nIndicates reflection and evaluation. It's a call to assess your past actions and make choices that align with your higher purpose.",
"The Empress\nSymbolizes nurturing and abundance. This card represents fertility, creativity, and a connection to nature and nurturing energies."];
//map linking card number with prediction texts
let predictionMap = {};

//image and sound preload
function preload() {
  tarotImage = loadImage('tarot.png');
  for (let i = 0; i < 12; i++) {
    predictionImages.push(loadImage(`tarotcard${i + 1}.png`));
  }
  backgroundImage = loadImage('background.jpg');
  soundEffect = loadSound('soundeffect.mp3');
}

function setup() {
  createCanvas(700, 700);

  let offsetX = 180;
  let offsetY = 150;

  //position tarot card
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      let x = j * (cardWidth + padding) + padding + cardWidth / 2 + offsetX;
      let y = i * (cardHeight + padding) + padding + cardHeight / 2 + offsetY;
      let cardNumber = i * cols + j + 1;
      cards.push(new TarotCard(x, y, cardNumber));
    }
  }

  //play again button to reset the game
  playAgainButton = createButton('Play Again');
  playAgainButton.position(width - 100, 20);
  playAgainButton.mousePressed(resetGame);
  playAgainButton.hide();

  //start game button to make the introduction text disappear
  explanationButton = createButton('Start Game');
  explanationButton.position(width / 2 - 50, height / 2 + 50);
  explanationButton.mousePressed(removeExplanation);

//assign predicition cards to text
  for (let i = 0; i < cards.length; i++) {
    predictionMap[cards[i].cardNumber] = predictionTexts[i];
  }
}


//function to reset the game
function resetGame() {
  selectedCard = null;

  // cards change position
  for (let i = 0; i < cards.length; i++) {
    let randomIndex = floor(random(cards.length));
    let temp = cards[i];
    cards[i] = cards[randomIndex];
    cards[randomIndex] = temp;
  }

  // reposition cards
  let offsetX = 180;
  let offsetY = 150;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      let index = i * cols + j;
      let x = j * (cardWidth + padding) + padding + cardWidth / 2 + offsetX;
      let y = i * (cardHeight + padding) + padding + cardHeight / 2 + offsetY;
      cards[index].targetX = x;
      cards[index].targetY = y;
      cards[index].x = -cardWidth * 3.5;
      cards[index].y = -cardHeight * 3.5;
      cards[index].animationStarted = false;
    }
  }
  // update prediction texts for each card
  for (let i = 0; i < cards.length; i++) {
    cards[i].predictionText = shuffledPredictionTexts[i];
  }
}

function removeExplanation() {
  showExplanation = false;
  explanationButton.hide();
}

function draw() {
  imageMode(CENTER);
  image(backgroundImage, width / 2, height / 2);

  if (showExplanation) {
    fill(0);
    rect(width / 4, height / 4, width / 2, height / 2);
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(14);
    let explanationText = "Welcome to your daily tarot prediction!\n Tarot is a deck of cards typically used for divination,\n self-reflection, and gaining insights into situations. \nClick on a card to see your fate. \nClick on the play again button to choose the card again.";
    text(explanationText, width / 2, height / 2);
  } else {
    if (selectedCard !== null) {
      displayPrediction(selectedCard);
      playAgainButton.show();
    } else {
      playAgainButton.hide();
      for (let card of cards) {
        card.display();
      }
    }
  }
}

function mouseClicked() {
  for (let card of cards) {
    if (card.contains(mouseX, mouseY)) {
      selectedCard = card.getCardNumber();
      soundEffect.play(); // Play the sound effect
      break;
    }
  }
}

//function to display and show the tarot card
function displayPrediction(cardNumber) {
  image(backgroundImage, width / 2, height / 2);

  let predictionImage = predictionImages[cardNumber - 1];
  let predictionX = width / 2 - 30; 
  let predictionY = height / 2 + 20; 
  image(predictionImage, predictionX, predictionY, predictionWidth, predictionHeight);

  let textBoxSize = 200;
  let textBoxX = width / 2 + 100; 
  let textBoxY = height / 2 - 100;
  fill(0);
  rect(textBoxX, textBoxY, textBoxSize, textBoxSize);
  fill(255);
  textSize(12);
  textAlign(LEFT, TOP);

  // show prediction text based on the clicked card number
  let predictionText = predictionMap[cardNumber];
  if (predictionText) {
    let textLines = predictionText.split('\n');
    textLines.forEach((line, index) => {
      text(line, textBoxX + 10, textBoxY + 10 + index * 20, textBoxSize - 20);
    });
  }
}

class TarotCard {
  constructor(x, y, cardNumber) {
    this.targetX = x; 
    this.targetY = y;
    this.width = cardWidth;
    this.height = cardHeight;
    this.cardNumber = cardNumber;
    this.predictionText = ""; 

    //set the intial card off screen
    this.x = -this.width * 3.5;
    this.y = -this.height * 3.5;
    //speed of card movement
    this.speed = 7;
    // boolean to track if the animation has started
    this.animationStarted = false;
  }

  display() {
    //animate after a delay
    setTimeout(() => {
      this.animationStarted = true;
    }, 100 * this.cardNumber);

    if (this.animationStarted) {
    // animation of the card movement 
      if (this.x < this.targetX) {
        this.x += this.speed;
      }
      if (this.y < this.targetY) {
        this.y += this.speed;
      }

      image(tarotImage, this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
    }
  }

  contains(px, py) {
    return px > this.x - this.width / 2 && px < this.x + this.width / 2 &&
      py > this.y - this.height / 2 && py < this.y + this.height / 2;
  }

  getCardNumber() {
    return this.cardNumber;
  }
}