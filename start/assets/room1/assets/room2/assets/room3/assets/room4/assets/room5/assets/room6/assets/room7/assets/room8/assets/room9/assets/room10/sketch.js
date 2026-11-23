let line10;
let dollhouse;
let bg;
let triangleX = 0;
let triangleSpeed = 0.2;
//want to stretch image proportionately, these are original dimensions
let w = 1440;
let h = 731;

async function setup(){
  createCanvas(windowWidth, windowHeight);
  describe("but maybe that is the name of this sick, sick game.");

  
  line11 = await loadSound('assets/line11.m4a');
  bg = await loadImage('assets/biggrass.jpg');
  dollhouse = await loadImage('assets/dollhouse2.jpg');

  line11.play();
}

function draw(){
  image(bg,0,0,width,height);
  image(dollhouse,-60,0,1600,740);
  fill(0,100);
  rect(0,0,width,height);

  //changes position and speed of triangle
  if (triangleX > 10){
    triangleSpeed = -.2;
  }
  else if (triangleX < 0){
    triangleSpeed = .2;
  }
  
  triangleX = triangleX + triangleSpeed;
  
  noStroke();
  fill(151, 207, 245);
  resetMatrix();
  beginShape();
  splineVertex(triangleX+1360,height/2-70);
  splineVertex(triangleX+1420,height/2);
  splineVertex(triangleX+1360,height/2+70);
  endShape(CLOSE);
}

function mousePressed(){
  if(mouseX>triangleX+1360 && mouseX<triangleX+1420 && mouseY>height/2-70 && mouseY<height/2+70){
    window.location.href = "assets/room11/index.html";
  }
}