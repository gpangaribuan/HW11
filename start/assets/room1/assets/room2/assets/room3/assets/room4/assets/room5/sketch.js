let line6;
let dollhouse;
let bg;
let triangleY = 0;
let triangleSpeed = 0.2;
//want to stretch image proportionately, these are original dimensions
let w = 1440;
let h = 731;

async function setup(){
  createCanvas(windowWidth, windowHeight);
  describe("all that left was");
  imageMode(CENTER);
  
  line6 = await loadSound('assets/line6.mp4');
  dollhouse = await loadImage('assets/dollhouse2.jpg');
  bg = await loadImage('assets/biggrass.jpg');
  line6.play();
}

function draw(){
  image(bg,0,0,width,height);
  image(dollhouse,800,300,6*w,6*h);

  //changes position and speed of triangle
  if (triangleY > 10){
    triangleSpeed = -.2;
  }
  else if (triangleY < 0){
    triangleSpeed = .2;
  }
  
  triangleY = triangleY + triangleSpeed;
  
  noStroke();
  fill(151, 207, 245);
  resetMatrix();
  beginShape();
  splineVertex(width/2-70,triangleY+660);
  splineVertex(width/2,triangleY+710);
  splineVertex(width/2+70,triangleY+660);
  endShape(CLOSE);

  fill(0);
  rect(450,200,520,390);
}

function mousePressed(){
  if(mouseX>width/2-70 && mouseX<width/2+70 && mouseY>triangleY+660 && mouseY<triangleY+710){
    window.location.href = "assets/room6/index.html";
  }
}