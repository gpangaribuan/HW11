let song;
let dollhouse;
let mami;
let eldin;

async function setup() {
  createCanvas(400, 520);
  // Help blind or low-vision users understand your sketch
  describe("A 400 by 400 pixel gray canvas.");
  
  song = await loadSound('/assets/srger.m4a');

  dollhouse = await loadImage('/assets/dollhouse.jpg');
  mami = await loadImage('/assets/mamiwoborder.png');
  eldin = await loadImage('/assets/eldinwoborder.png');
}

function draw() {
  background(220);
  image(dollhouse,0,0,width,height);
  image(mami,70,70,70,100);
  image(eldin,100,100,70,100);
  text("{mouseX}, {mouseY", 100,100);
}

function mousePressed(){
  song.play;
}