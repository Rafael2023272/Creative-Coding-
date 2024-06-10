var img
function preload(){
  img=loadImage("flower.jpeg");
}

function setup() {
  createCanvas(600, 400);
  background(0);
}

function draw() {
  background(0);
  image(img,0,0);
  var v=map(mouseX, 10, width, 0, 10);
  filter(POSTERIZE, v);
  
}