let line10;
let dollhouse;
let bg;
let triangleX = 0;
let triangleSpeed = 0.2;
let babyPic;
//want to stretch image proportionately, these are original dimensions
let w = 1440;
let h = 731;

async function setup(){
  createCanvas(windowWidth, windowHeight);
  describe("the perfect little girl of yours, who only ever wanted love.");
  imageMode(CENTER);

  
  line10 = await loadSound('assets/line10.m4a');
  bg = await loadImage('assets/biggrass.jpg');
  dollhouse = await loadImage('assets/dollhouse2.jpg');
  babyPic = await loadImage('assets/baby.jpg');

  line10.play();
}

function draw(){
  image(bg,0,0,width,height);
  image(dollhouse,1800,-500,5.8*w,6.6*h);
  image(babyPic,width/2+30,height/2,453,604);

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
    window.location.href = "assets/room10/index.html";
  }
}