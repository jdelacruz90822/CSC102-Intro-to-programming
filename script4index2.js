// -----------------------------------------
// Get page elements
// -----------------------------------------

// Reference to meme image
const meme = document.getElementById("meme");

// Reference to validation message area
const message = document.getElementById("validationMessage");

// References to start/stop buttons
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");

// Variable to hold movement interval ID
let moveInterval;

// function to validate form
function validateForm() {

    // Get user input value
    let userText = document.getElementById("userInput").value;

    // If nothing entered, show message
    if (userText.trim() === "") {
        message.innerHTML = "Please type something to activate the Start button.";
        return false;
    }

    // If valid, show success message
    message.innerHTML = "Controls activated! You can now press Start.";

    // Enable Start button
    startBtn.disabled = false;

    // Prevent form reload
    return false;
}
// -----------------------------------------
// Function: startMoving()
// Called when Start button is clicked
// -----------------------------------------
function startMoving() {

    // Disable Start button
    startBtn.disabled = true;

    // Enable Stop button
    stopBtn.disabled = false;

    // Show user that movement has begun
    message.innerHTML = "The meme is moving!";

    // Start calling movement function repeatedly
    moveInterval = setInterval(moveMeme, 150);
}
// -----------------------------------------
// Function: stopMoving()
// Called when Stop button is clicked
// -----------------------------------------
function stopMoving() {

    // Stop interval so movement ends
    clearInterval(moveInterval);

    // Re-enable Start button
    startBtn.disabled = false;

    // Disable Stop button
    stopBtn.disabled = true;

    // Update user message
    message.innerHTML = "Movement stopped.";
}

// Function: moveMeme()
// Moves the meme image to a random location
function moveMeme() {

    // Screen width and height
    const maxX = window.innerWidth - 250;
    const maxY = window.innerHeight - 250;

    // Random x/y positions
    const x = Math.floor(Math.random() * maxX);
    const y = Math.floor(Math.random() * maxY);

    // Set new image position
    meme.style.left = x + "px";
    meme.style.top = y + "px";
}
