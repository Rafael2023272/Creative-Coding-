let mic;
let colors = [
  "#FF0000", // Red
  "#0000FF", // Blue
  "#FFFF00", // Yellow
  "#FFFFFF", // White
];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  let micLevel = mic.getLevel() * height * 3;

  if (mouseIsPressed) {
    fill(random(colors));
    noStroke();
    let shapeType = int(random(3)); // Randomly choose a shape type

    if (shapeType === 0) {
      ellipse(mouseX, mouseY, micLevel, micLevel); // Draw an ellipse
    } else if (shapeType === 1) {
      rect(mouseX, mouseY, micLevel, micLevel); // Draw a rectangle
    } else if (shapeType === 2) {
      triangle(
        mouseX, mouseY - micLevel / 2,
        mouseX - micLevel / 2, mouseY + micLevel / 2,
        mouseX + micLevel / 2, mouseY + micLevel / 2
      ); // Draw a triangle
    }
  }
}




