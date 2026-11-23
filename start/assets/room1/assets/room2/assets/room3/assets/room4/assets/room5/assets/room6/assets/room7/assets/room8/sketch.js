let line9;
let dollhouse;
let bg;
let triangleY = 0;
let triangleSpeed = 0.2;
//want to stretch image proportionately, these are original dimensions
let w = 1440;
let h = 731;

async function setup(){
  createCanvas(windowWidth, windowHeight);
  describe("so i punish myself for punishing myself, i recoil in shame, i hid this pain from you. just so i could remain");
  imageMode(CENTER);
  
  line9 = await loadSound('assets/line9.m4a');
  dollhouse = await loadImage('assets/dollhouse2.jpg');
  bg = await loadImage('assets/biggrass.jpg');
  line9.play();
}

function draw(){
  image(bg,0,0,width,height);
  image(dollhouse,0,1670,6*w,6*h);

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
    window.location.href = "assets/room9/index.html";
  }
}
