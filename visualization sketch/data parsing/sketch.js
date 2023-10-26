let url = 'https://corsproxy.io/?' + encodeURIComponent('http://digitalgendergaps.org/api/v1/query_national?date=202206');
let data;

function preload() {
  data = loadJSON(url);
}

function setup() {
 createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  
  if (data) {
    displayData(data, 10, 20);
  } 
  
}

//turn data into string and displaye
function displayData(obj, x, y) {
    let formattedData = JSON.stringify(obj, null, 2);
  let lines = formattedData.split('\n');
 
  //move to the next line 
  for (let line of lines) {
    text(line, x, y);
    y += 20; 
  }
}
