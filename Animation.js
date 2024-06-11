// Define the total number of frames in the animation
var numFrames = 7;

// Initialize the current frame index
var frame = 0;

// Create an array to store images
var images = new Array(numFrames);

// Preload function to load images before setup
function preload() {
    // Load each image into the images array
    images[0] = loadImage("walk0.png");
    images[1] = loadImage("walk1.png");
    images[2] = loadImage("walk2.png");
    images[3] = loadImage("walk3.png");
    images[4] = loadImage("walk4.png");
    images[5] = loadImage("walk5.png");
    images[6] = loadImage("walk6.png");
    images[7] = loadImage("walk7.png"); // This should be images[6] since arrays are zero-indexed
}
function setup() {
    // Create a canvas that fills the entire window
    createCanvas(windowWidth, windowHeight);
    
    // Set the frame rate of the animation
    frameRate(7);
    
    // Set the background color to white
    background(255);
}
function draw() {
    // Clear the canvas by drawing a white background
    background(255);

    // Increment the frame index
    frame++;

    // Reset frame index if it exceeds the number of frames
    if (frame == numFrames) frame = 0;

    // Display the current frame's image at the mouse position with an offset
    image(images[frame], mouseX - 100, mouseY - 100);
}


