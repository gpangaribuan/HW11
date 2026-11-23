let dollhouse;
let bg;
let rectSize = 0;
let speed = 0.2;
let bgMusic;

async function setup(){
  createCanvas(windowWidth, windowHeight);
  describe("A coded music 'video'.");
  rectMode(CENTER);
  
  dollhouse = await loadImage('assets/dollhouse2.jpg');
  bg = await loadImage('assets/biggrass.jpg');
  bgMusic = await loadSound('assets/line9.mp4');

  bgMusic.play();
}

function draw(){
  image(bg,0,0,width,height);
  image(dollhouse,-60,0,1600,740);

  //rectangle grows and shrinks
  if (rectSize > 10){
    speed = -.1;
  }
  else if (rectSize < 0){
    speed = .1;
  }
  
  rectSize = rectSize + speed;

  strokeWeight(15);
  stroke(255, 192, 226);
  noFill();
  rect(857,592,221+rectSize,70+rectSize);
  strokeWeight(4);
  stroke(18, 219, 175);
  rect(857,592,231+rectSize,80+rectSize);
  rect(857,592,211+rectSize,60+rectSize);

  noStroke();
  fill(255, 250, 87);
  beginShape();
  splineVertex(792,570);
  splineVertex(784,580);
  splineVertex(770,582);
  splineVertex(780,593);
  splineVertex(775,605);

  splineVertex(792,598);

  splineVertex(806,605);
  splineVertex(808,592);
  splineVertex(818,582);
  splineVertex(800,580);
  splineVertex(792,570);
  endShape();
}

function mousePressed(){
   if (mouseX>716 && mouseX<933 && mouseY>538 && mouseY<625) {
   window.location.href = "assets/room1/index.html";
  }
}