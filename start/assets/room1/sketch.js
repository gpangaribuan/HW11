let line1;
let dollhouse;
let bg;
let mami;
let eldin;
let imgRotate;
let triangleY = 0;
let triangleSpeed = 0.2;
//want to stretch image proportionately, these are original dimensions
let w = 1440;
let h = 731;

async function setup(){
  createCanvas(windowWidth, windowHeight);
  describe("i remember us fighting, the blame pooling in my hands.");
  angleMode(DEGREES);
  imageMode(CENTER);

  line1 = await loadSound('assets/line1.m4a');
  mami = await loadImage('assets/mamiwoborder.png');
  eldin = await loadImage('assets/eldinwoborder.png');
  dollhouse = await loadImage('assets/dollhouse2.jpg');
  bg = await loadImage('assets/biggrass.jpg');

  line1.play();
}

function draw(){
  image(bg,0,0,width,height);
  image(dollhouse,60,-930,6*w,6*h);

  //rotates sticker figures
   if (frameCount%30 == 0) {
    imgRotate = random(-2,2);
  }

  //mami n kakak fighting
  rotate(imgRotate);
  image(mami,1000,400,280,400);
  resetMatrix();
  rotate(imgRotate);
  image(eldin,300,400,280,400);

  //up button
  //changes position and speed of triangle
  if (triangleY > 10){
    triangleSpeed = -.2;
  }
  else if (triangleY < 0){
    triangleSpeed = .2;
  }
  
  triangleY = triangleY + triangleSpeed;
  
  //rounded triangle
  noStroke();
  fill(151, 207, 245);
  resetMatrix();
  beginShape();
  splineVertex(width/2-70,triangleY+60);
  splineVertex(width/2,triangleY+10);
  splineVertex(width/2+70,triangleY+60);
  endShape(CLOSE);
}

function mousePressed(){
  if(mouseX>width/2-70 && mouseX<width/2+70 && mouseY>triangleY+10 && mouseY<triangleY+60){
    window.location.href = "assets/room2/index.html";
  }
}