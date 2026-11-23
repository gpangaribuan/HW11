let line8;
let dollhouse;
let bg;
let triangleX = 0;
let triangleSpeed = 0.2;
//want to stretch image proportionately, these are original dimensions
let w = 1440;
let h = 731;

async function setup(){
  createCanvas(windowWidth, windowHeight);
  describe("don't you love your mother? stop making up problems.");
  imageMode(CENTER);
  
  line8 = await loadSound('assets/lastline.mp4');
  dollhouse = await loadImage('assets/dollhouse2.jpg');
  bg = await loadImage('assets/biggrass.jpg');
  line8.play();
}

function draw(){
  image(bg,0,0,width,height);
  image(dollhouse,1700,250,6*w,6*h);

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
    window.location.href = "assets/end/index.html";
  }
}
