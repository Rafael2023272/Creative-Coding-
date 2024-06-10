var img, x, y;

function preload() {

img = loadImage("bird.jpeg");

}



function setup() {

createCanvas (500, 500);

background(100);

noStroke();

}



function draw() {

x = random(width);

y = random(height);

var c = img.get(x, y);

fill(c[0], c[1], c[2], 50);

rect(x, y, 30, 30);

}