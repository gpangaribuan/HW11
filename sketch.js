let posX = 0;
let posY = 520;
let direction = -1;
let size = 300;
let r = 171;
let g = 157;
let b = 209;
    
function setup() {
  createCanvas(700, 520);
  describe('Draws a moon phase');
  noStroke();
}

function draw() {
  fill(226, 227, 215);

  posY = posY + direction;

  //changes y position
  if (posY < 200) {
    direction = 1;
  }

  if (posY > 720) {
    direction = -1;
  }

  //changes x position
  if (posX > 900) {
    posX = -200;
  }

  //changes size
  if (direction == 1) {
    size = size + 0.3;

    //goes darker
    r = r + .4;
    g = g + .4;
    b = b + .3;
  }

  if (direction == -1) {
    size = size - 0.3;

    //goes lighter
    r = r - .4;
    g = g - .4;
    b = b - .3;
  }

  //draws circle
  background(r, g, b);
  circle(posX, posY, size);
  posX = posX + 1;
}