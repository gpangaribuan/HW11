let line5;
let dollhouse;
let bg;
let triangleX = 0;
let triangleSpeed = 0.2;
let video;
//want to stretch image proportionately, these are original dimensions
let w = 1440;
let h = 731;

async function setup(){
  createCanvas(windowWidth, windowHeight);
  describe("what do i have to give? to silence the hurt you caused me, bear the guilt that consumed me");
  imageMode(CENTER);

  
  line5 = await loadSound('assets/line5.m4a');
  bg = await loadImage('assets/biggrass.jpg');
  dollhouse = await loadImage('assets/dollhouse2.jpg');

  line5.play();
}

function draw(){
  image(bg,0,0,width,height);
  image(dollhouse,-70,285,5.8*w,6.6*h);

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
  splineVertex(triangleX+80,height/2-70);
  splineVertex(triangleX+20,height/2);
  splineVertex(triangleX+80,height/2+70);
  endShape(CLOSE);
}

function mousePressed(){
  if(mouseX>triangleX+20 && mouseX<triangleX+80 && mouseY>height/2-70 && mouseY<height/2+70){
    window.location.href = "assets/room12/index.html";
  }
}