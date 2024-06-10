let playerX, playerY; // Position of the player
let playerSize = 30; // Size of the player
let bullets = []; // Array to hold bullets
let enemies = []; // Array to hold enemies
let score = 1; // Player's score
let enemySpeed = 0.5; // Speed of the enemies
let gameState = 'menu'; // Game states: 'menu', 'playing', 'gameOver', 'win'
let winScore = 50; // Score needed to win
let winMessageDisplayed = false; // Flag to track if win message is displayed
let gameOverMessage = ''; // Message to display on game over
let gameOverDisplayed = false; // Flag to track if game over screen is displayed
let blinking = true; // Flag to control blinking effect

function setup() {
  createCanvas(windowWidth, windowHeight);
  playerX = width / 6;
  playerY = height - 30;
}

function draw() {
  background(20);

  if (gameState === 'menu') {
    // Draw starry background for the main menu
    drawStarryBackground();

    // Display main menu screen
    fill(155);
    textSize(80);
    textAlign(CENTER);
    if (blinking) {
      text("SPACE SHOOTER", width / 2, height / 2 - 80);
    }
    textSize(16);
    text("Press ENTER to start", width / 2, height / 2 + 15);
    text("Press ANY KEY to shoot", width / 2, height / 2 + 35);
    textSize(24);
    fill(255, 0, 0);
    text("Get 50 points to win!", width / 2, height / 2 + 160);
  } else if (gameState === 'playing') {
    // Draw starry background for the playing state
    drawStarryBackground();

    // Draw player as a triangle
    drawPlayer();

    // Draw bullets
    fill(255);
    for (let bullet of bullets) {
      rect(bullet.x, bullet.y, 5);
      bullet.y -= 5;
    }

    // Remove bullets that are off the screen
    bullets = bullets.filter(bullet => bullet.y > 0);

    // Draw enemies
    fill(255, 0, 0);
    for (let enemy of enemies) {
      ellipse(enemy.x, enemy.y, 20);
      enemy.y += enemySpeed;

      // Check collision with player
      if (dist(playerX, playerY, enemy.x, enemy.y) < playerSize / 2 + 10) {
        gameOver("Game Over");
        gameState = 'gameOver';
      }
    }

    // Remove enemies that are off the screen
    enemies = enemies.filter(enemy => enemy.y < height);

    // Check collision between bullets and enemies
    for (let bullet of bullets) {
      for (let i = enemies.length - 1; i >= 0; i--) {
        if (dist(bullet.x, bullet.y, enemies[i].x, enemies[i].y) < 10) {
          enemies.splice(i, 1);
          score++;
          if (score % 10 === 0) {
            enemySpeed += 2; // Increase enemy speed every 10 points
          }
          break;
        }
      }
    }

    // Display score
    fill(255);
    textSize(20);
    textAlign(LEFT);
    text("Score: " + score, 10, 30);

    // Display win message if score reaches winScore
    if (score >= winScore && !winMessageDisplayed) {
      winMessageDisplayed = true;
      gameState = 'win'; // Set game state to 'win'
      gameOverMessage = "You win!";
    }

    // Move player with mouse
    playerX = constrain(mouseX, playerSize / 2, width - playerSize / 2);

    // Spawn new enemies
    if (frameCount % 60 == 0) {
      spawnEnemy();
    }
  } else if (gameState === 'gameOver') {
    // Draw starry background for the game over state
    drawStarryBackground();

    // Display game over screen after a delay
    setTimeout(() => {
      fill(255, 0, 0);
      textSize(32);
      textAlign(CENTER);
      text(gameOverMessage, width / 2, height / 2 - 20);
      textSize(16);
      fill(255);
      text("Press SPACEBAR to return to menu", width / 2, height / 2 + 20);
      gameOverDisplayed = true;
    }, 1000); // 1 second delay before showing the game over screen
  } else if (gameState === 'win') {
    // Display win screen
    fill(0, 255, 0);
    textSize(32);
    textAlign(CENTER);
    text(gameOverMessage, width / 2, height / 2 - 20);
    textSize(16);
    fill(255);
    text("Press SPACEBAR to return to menu", width / 2, height / 2 + 20);
  }
}

function keyPressed() {
  if (gameState === 'menu' && keyCode === ENTER) {
    gameState = 'playing';
  } else if ((gameState === 'gameOver' || gameState === 'win') && keyCode === 32) { // SPACEBAR key
    if (gameOverDisplayed) {
      resetGame();
      gameState = 'menu'; // Return to main menu
      gameOverDisplayed = false;
    } else {
      resetGame();
      gameState = 'menu'; // Return to main menu
    }
  } else if (gameState === 'playing') {
    // Shoot bullet
    bullets.push({ x: playerX, y: playerY });
  }
}

function drawPlayer() {
  fill(255, 255, 0);
  triangle(playerX, playerY - playerSize / 2, playerX - playerSize / 2, playerY + playerSize / 2, playerX + playerSize / 2, playerY + playerSize / 2);
}

function drawStarryBackground() {
  // Draw stars
  fill(255);
  for (let i = 0; i < 200; i++) {
    let x = random(width);
    let y = random(height);
    ellipse(x, y, 2, 2);
  }
}

function spawnEnemy() {
  enemies.push({ x: random(width), y: 0 });
}

function gameOver(message) {
  setTimeout(() => {
    gameState = 'gameOver';
    gameOverMessage = message;
    noLoop(); // Stop the game loop
  }, 1000); // Delay in milliseconds before showing the game over screen (1 second in this case)
}

function resetGame() {
  bullets = [];
  enemies = [];
  score = 0;
  enemySpeed = 2;
  winMessageDisplayed = false;
  loop(); // Restart the game loop
}

function toggleBlinking() {
  blinking = !blinking;
}

// Toggle blinking every 500 milliseconds
setInterval(toggleBlinking, 50);




