let line8;
let dollhouse;
let bg;
let triangleY = 0;
let triangleSpeed = 0.2;
//want to stretch image proportionately, these are original dimensions
let w = 1440;
let h = 731;

async function setup(){
  createCanvas(windowWidth, windowHeight);
  describe("don't you love your mother? stop making up problems.");
  imageMode(CENTER);
  
  line8 = await loadSound('assets/line8.mp4');
  dollhouse = await loadImage('assets/dollhouse2.jpg');
  bg = await loadImage('assets/biggrass.jpg');
  line8.play();
}

function draw(){
  image(bg,0,0,width,height);
  image(dollhouse,1700,250,6*w,6*h);

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
    splineVertex(width/2-70,triangleY+60);
  splineVertex(width/2,triangleY+10);
  splineVertex(width/2+70,triangleY+60);
  endShape(CLOSE);
}

function mousePressed(){
  if(mouseX>width/2-70 && mouseX<width/2+70 && mouseY>triangleY+10 && mouseY<triangleY+60){
    window.location.href = "assets/room8/index.html";
  }
}
