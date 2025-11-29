// Variable to store the player's name
let playerName = "";

// Function to capture player's name from the form input
function setPlayerName(event) {
    event.preventDefault(); // Prevent form from submitting and refreshing page

    // How to get the value from the input field
    playerName = document.getElementById("playerName").value;

    // Output a greeting to the user using innerHTML
    document.getElementById("greeting").innerHTML = "Hello, " + playerName + "! Get ready to roll the dice.";

    // Clear previous game results
    document.getElementById("gameResult").innerHTML = "";
}

// Attach the form submission to setPlayerName function
document.getElementById("playerForm").onsubmit = setPlayerName;

/*
 * Function: playDiceGame
 * Description: This function simulates a dice duel between the player and the computer.
 * It generates random numbers for both, compares them, and displays the result.
 */
function playDiceGame() {
    if (playerName === "") {
        // Check if player name is set, if not show a message
        document.getElementById("gameResult").innerHTML = "Please enter your name first!";
        return; // Stop function execution
    }

    // Generate a random number between 1 and 6 for the player
    let playerRoll = Math.floor(Math.random() * 6) + 1;

    // Generate a random number between 1 and 6 for the computer
    let computerRoll = Math.floor(Math.random() * 6) + 1;

    // Prepare the result message
    let message = playerName + " rolled: " + playerRoll + "<br>";
    message += "Computer rolled: " + computerRoll + "<br>";

    // Conditional statements to decide who wins
    if (playerRoll > computerRoll) {
        message += "<strong>Congratulations " + playerName + "! You win!</strong>";
    } else if (playerRoll > computerRoll) {
        message += "<strong>Sorry " + playerName + ", the computer wins!</strong>";
} else {
        message += "<strong>It's a tie!</strong>";
    }

    // Display the result on the webpage
    document.getElementById("gameResult").innerHTML = message;
}