let line2;
let dollhouse;
let bg;
let triangleY = 0;
let triangleSpeed = 0.2;
//want to stretch image proportionately, these are original dimensions
let w = 1440;
let h = 731;

async function setup(){
  createCanvas(windowWidth, windowHeight);
  describe("i'd lock myself in the bathroom, cus my bedroom only locked from the outside.");
  imageMode(CENTER);
  
  dollhouse = await loadImage('assets/dollhouse2.jpg');
  bg = await loadImage('assets/biggrass.jpg');
  line2 = await loadSound('assets/line2.m4a');

  line2.play();
}

function draw(){
  image(bg,0,0,width,height);
  image(dollhouse,30,1000,6*w,6*h);

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
}

//next page
function mousePressed(){
  if(mouseX>width/2-70 && mouseX<width/2+70 && mouseY>triangleY+660 && mouseY<triangleY+710){
    window.location.href = "assets/room3/index.html";
  }
}