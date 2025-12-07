// Form that the user types into
var form = document.getElementById("palForm");

// Input box where user enters text
var input = document.getElementById("userInput");

// Paragraph where messages appear
var result = document.getElementById("result");

// Button to check another word
var continueBtn = document.getElementById("continueBtn");


form.onsubmit = function () {

    // Get the text from the input field
    var text = input.value;

    // Remove spaces and make lowercase
    var cleaned = text.replace(/\s+/g, "").toLowerCase();

    // Reverse text
    var reversed = cleaned.split("").reverse().join("");

    // Check if palindrome
    if (cleaned === reversed) {
        result.innerHTML = `"${text}" YOUR CORRECT-THIS IS A PALINDROME!`;
        result.style.color = "green";
    } else {
        result.innerHTML = `"${text}" TRY AGAIN!.`;
        result.style.color = "red";
    }

    // Hide the form temporarily
    form.style.display = "none";

    // Show "continue" button
    continueBtn.style.display = "inline-block";

    // Prevent page reload
    return false;
};

// --------------------------------------------------------
// CONTINUE BUTTON (LETS USER CHECK ANOTHER WORD)

continueBtn.onclick = function () {

    // Clear input
    input.value = "";

    // Clear result message
    result.innerHTML = "";

    // Show form again
    form.style.display = "block";

    // Hide continue button
    continueBtn.style.display = "none";
};
