let dollhouse;
let bg;
let song;
let homeButton;

async function setup(){
  createCanvas(windowWidth, windowHeight);
  describe("A coded music 'video'.");
  
  dollhouse = await loadImage('assets/dollhouse2.jpg');
  bg = await loadImage('assets/biggrass.jpg');
  homeButton = await loadImage('assets/kite.png');
  song = await loadSound('assets/srger.m4a');

  song.play();
}

function draw(){
  image(bg,0,0,width,height);
  image(dollhouse,-60,0,1600,740);
  image(homeButton,80,200,288,387);
}

function mousePressed(){
   if (mouseX>113 && mouseX<340 && mouseY>224 && mouseY<550) {
   window.location.href = "/../../../../../../../../../../../../index.html";
  }
}