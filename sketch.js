let posX = 0;
let posY = 520;
let direction = -1;
let size = 300;
let r = 171;
let g = 157;
let b = 209;
let bulan;
let u;
let l;
let a;
let n;
let rotate1;
let rotate2;
let rotate3;
let rotate4;
let rotate5;

async function setup() {
  createCanvas(700, 520);
  describe('Draws a moon phase');
  noStroke();
  angleMode(DEGREES);

  bulan = await loadImage("./assets/b.png");
  u = await loadImage("./assets/u.jpg");
  l = await loadImage("./assets/L.jpg");
  a = await loadImage("./assets/a.jpg");
  n = await loadImage("./assets/n.jpg");  
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

  //changes letter position randomly
  if (frameCount%30 == 0) {
    rotate1 = random(-13,-9);
    rotate2 = random(-2,0);
    rotate3 = random(height/2-60,height/2-80)
    rotate4 = random(9,11);
    rotate5 = random(7,9);
  }

  //draws letters
  rotate(rotate1);
  image(bulan,20,height/2,100,100);
  rotate(rotate2);
  image(u,150,height/2-10,70,70);
  resetMatrix();
  image(l,320,rotate3,90,90);
  rotate(rotate4);
  image(a,480,height/2-130,70,70);
  rotate(rotate5);
  image(n,600,height/2-200,90,90);
}
