// Form element
var form = document.getElementById("palForm");

// Input field
var input = document.getElementById("userInput");

// Paragraph for displaying results
var result = document.getElementById("result");

// Button to continue checking words
var continueBtn = document.getElementById("continueBtn");

// CLASS FOR PALINDROME CHECKING

class PalindromeChecker {

    // Constructor receives user text
    constructor(text) {
        this.originalText = text;
        this.cleanedText = "";
        this.reversedText = "";
    }

    // Function to clean and validate text
    cleanText() {
        // Convert to lowercase
        this.cleanedText = this.originalText.toLowerCase();

        // Remove spaces using string manipulation
        this.cleanedText = this.cleanedText.replace(/\s+/g, "");
    }

    // Function that reverses text using a LOOP
    reverseText() {
        // Start with an empty string
        this.reversedText = "";

        // Loop backwards through the string
        for (var i = this.cleanedText.length - 1; i >= 0; i--) {
            this.reversedText += this.cleanedText[i];
        }
    }

    // Function that checks if text is a palindrome
    isPalindrome() {
        // Decision logic
        if (this.cleanedText === this.reversedText) {
            return true;
        } else {
            return false;
        }
    }
}

// FORM SUBMISSION (NO EVENT LISTENERS USED)

form.onsubmit = function () {

    // Get user input text
    var userText = input.value;

    // Create object from class
    var checker = new PalindromeChecker(userText);

    // Clean the text
    checker.cleanText();

    // Reverse the text
    checker.reverseText();

    // Decision logic for result
    if (checker.isPalindrome()) {
        result.innerHTML = `"${userText}" is a PALINDROME! 🎉`;
        result.style.color = "green";
    } else {
        result.innerHTML = `"${userText}" is NOT a palindrome. Try again!`;
        result.style.color = "red";
    }

    // Hide the form after submission
    form.style.display = "none";

    // Show continue button
    continueBtn.style.display = "inline-block";

    // Prevent page refresh
    return false;
};

// CONTINUE BUTTON FUNCTIONALITY

continueBtn.onclick = function () {

    // Clear the input field
    input.value = "";

    // Clear the result text
    result.innerHTML = "";

    // Show the form again
    form.style.display = "block";

    // Hide continue button
    continueBtn.style.display = "none";
};
