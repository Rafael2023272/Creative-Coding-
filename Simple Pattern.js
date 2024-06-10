let offsetX = 0;
let offsetY = 0;

function setup() {
  createCanvas(400, 400);
  drawPattern();
}
function drawPattern() {
  background(20);
  let spacing = 20;
  for (let x = 0; x < width; x += spacing) {
    for (let y = 0; y < height; y += spacing) {
      let colorChoice = random(1);
      if (colorChoice > 0.5) {
        stroke(random(255), random(200), random(200));
      } else {
        stroke(random(255), random(200), random(200));
      }
      let choice = random(1);
      if (choice > 0.5) {
        line(x + offsetX, y + offsetY, x + spacing + offsetX, y + spacing + offsetY);
      } else {
        line(x + offsetX, y + spacing + offsetY, x + spacing + offsetX, y + offsetY);
      }
    }
  }
}
function mouseClicked() {
  offsetX += 0;
  offsetY += 0;
  drawPattern(); // Redraw the pattern with updated offsets
}
