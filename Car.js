function setup() {
  createCanvas(400, 400);
}
function draw() {
  background(220);
  //body of the car
  fill("#333333")
  rect(50, 200, 300, 50);
  rect(100, 150, 245,50);
  
  //wheels
  fill("#000000")
  ellipse(100, 250, 50, 50); //front
  ellipse(300, 250, 50, 50); // back
  //back
  fill("#333333");
  rect(50, 112, 230, 100);
  //wheel
  //windows
  fill("#aeaba2")
  rect(310, 155, 35, 35) //front window
  
  ellipse(100, 250, 30, 30) //left tire
  ellipse(300, 250, 30, 30) //right tire
  
  line(50,212,350,212)
  fill("#aeaba2")
  rect(45, 240, 15, 10)
}