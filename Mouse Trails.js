let stars = [];
function setup() {
  createCanvas(windowWidth, windowHeight);
}
function draw() {
  background(10); // Set background color to very dark gray
  // Add current mouse position to the stars array
  let star = {
    x: mouseX,
    y: mouseY,
    size: random(20, 50),
    points: 5, // Number of points in the star
    color: color(random(255), random(255), random(255)), // Random color
    alpha: 255
  };
  stars.push(star);
  // Draw and update stars
  for (let i = 0; i < stars.length; i++) {
    let star = stars[i];
    fill(star.color.levels[0], star.color.levels[1], star.color.levels[2], star.alpha); // Set fill color with alpha value
    drawStar(star.x, star.y, star.size, star.points);
    // Update alpha value to make stars fade away
    star.alpha -= 1;
    
    // Remove stars with alpha less than or equal to 0
    if (star.alpha <= 0) {
      stars.splice(i, 1);
      i--;
    }
  }
}
// Function to draw a star
function drawStar(x, y, radius1, points) {
  let angle = TWO_PI / points;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = -PI / 2; a < TWO_PI - PI / 2; a += angle) {
    let sx = x + cos(a) * radius1;
    let sy = y + sin(a) * radius1;
    vertex(sx, sy);
    let sx2 = x + cos(a + halfAngle) * (radius1 / 2);
    let sy2 = y + sin(a + halfAngle) * (radius1 / 2);
    vertex(sx2, sy2);
  }
  endShape(CLOSE);
}














