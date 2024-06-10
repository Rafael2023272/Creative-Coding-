const temperatures = [
  { date: 'June 10', high: 42, low: 33 },
  { date: 'June 11', high: 43, low: 34 },
  { date: 'June 12', high: 41, low: 32 },
  { date: 'June 13', high: 43, low: 35 },
  { date: 'June 14', high: 44, low: 32 },
  { date: 'June 15', high: 41, low: 33 },
  { date: 'June 16', high: 45, low: 36 }
];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(50);
  textSize(14);
  textAlign(CENTER, CENTER);
  fill(0);

  let margin = 80;
  let graphHeight = height - 2 * margin;
  let graphWidth = width - 2 * margin;
  let barWidth = graphWidth / temperatures.length;

  // Draw axes
  stroke(100);
  strokeWeight(3);
  line(margin, margin, margin, height - margin);
  line(margin, height - margin, width - margin, height - margin);

  // Draw bars
  for (let i = 0; i < temperatures.length; i++) {
    let x = margin + i * barWidth;
    let yHigh = map(temperatures[i].high, 30, 50, height - margin, margin);
    let yLow = map(temperatures[i].low, 30, 50, height - margin, margin);

    // High temperature bar
    fill(255, 0, 0);
    rect(x, yHigh, barWidth / 2, height - margin - yHigh);

    // Low temperature bar
    fill(255, 130, 0);
    rect(x + barWidth / 2, yLow, barWidth / 2, height - margin - yLow);

    // Temperature values
    fill(255);
    text(temperatures[i].high + '°C', x + barWidth / 4, yHigh - 10);
    text(temperatures[i].low + '°C', x + 3 * barWidth / 4, yLow - 10);

    // Dates
    fill(255);
    text(temperatures[i].date, x + barWidth / 2, height - margin + 20);
  }

  // Title
  textSize(30);
  fill(250);
  text("UAE Weather Weekly Forcast (June 10 - 16, 2024)", width / 2, margin / 2);
}
