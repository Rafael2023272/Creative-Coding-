function setup() {
  createCanvas(1000, 400); // Create a canvas
  background(10); // Set background color to very dark gray
  textSize(100); // Set text size
  textAlign(CENTER, CENTER); // Set text alignment to center
  textFont('Arial'); // Set font to Arial
  fill(255); // Set fill color to white
}
function draw() {
  translate(150, 150); // Move the origin point
  
  // Draw "HELLO" using custom shapes
  drawLetterH(0, 0);
  drawLetterE(150, 0);
  drawLetterL(300, 0);
  drawLetterL(450, 0);
  drawLetterO(600, 0);
}
function drawLetterH(x, y) {
  beginShape();
  vertex(x, y);
  vertex(x + 40, y);
  vertex(x + 40, y + 120);
  vertex(x, y + 120);
  vertex(x, y + 80);
  vertex(x + 80, y + 80);
  vertex(x + 80, y + 120);
  vertex(x + 120, y + 120);
  vertex(x + 120, y);
  vertex(x + 80, y);
  vertex(x + 80, y + 40);
  vertex(x, y + 40);
  endShape(CLOSE);
}
function drawLetterE(x, y) {
  beginShape();
  vertex(x, y);
  vertex(x + 80, y);
  vertex(x + 80, y + 20);
  vertex(x, y + 20);
  vertex(x, y + 50);
  vertex(x + 100, y + 50);
  vertex(x + 100, y + 70);
  vertex(x, y + 70);
  vertex(x, y + 100);
  vertex(x + 80, y + 100);
  vertex(x + 80, y + 120);
  vertex(x, y + 120);
  endShape(CLOSE);
}
function drawLetterL(x, y) {
  beginShape();
  vertex(x, y);
  vertex(x + 20, y);
  vertex(x + 20, y + 120);
  vertex(x, y + 120);
  vertex(x, y + 100);
  vertex(x + 80, y + 100);
  vertex(x + 80, y + 120);
  vertex(x, y + 120);
  endShape(CLOSE);
}
function drawLetterO(x, y) {
  let angle = millis() / 1000; // Dynamic rotation angle
  push();
  translate(x + 40, y + 60);
  rotate(angle); // Rotate the circle
  beginShape();
  for (let i = 0; i < TWO_PI; i += 0.1) {
    let xoff = cos(i) * 40; // Varying radius
    let yoff = sin(i) * 40;
    vertex(xoff, yoff);
  }
  endShape(CLOSE);
  pop();
}


