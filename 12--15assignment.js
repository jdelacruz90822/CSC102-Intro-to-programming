// Access the form element from the HTML using its unique ID "palForm"
// document.getElementById searches the webpage and returns the element
// so we can control what happens when the form is submitted
var form = document.getElementById("palForm");

// Access the text input field where the user types a word or phrase
// This allows JavaScript to read and modify the user's input
var input = document.getElementById("userInput");

// Access the paragraph element used to display output messages
// JavaScript will update this element using innerHTML
var result = document.getElementById("result");

// Access the button that lets the user check another word
// This button is shown or hidden using JavaScript
var continueBtn = document.getElementById("continueBtn");

// CLASS DEFINITION FOR PALINDROME CHECKING

// A class is a blueprint for creating objects
// This class handles all logic related to checking palindromes
class PalindromeChecker {
    // CONSTRUCTOR METHOD
    // The constructor runs automatically when
    // a new PalindromeChecker object is created
    // The parameter "text" receives the user's input
    constructor(text) {

        // Store the original text exactly as the user typed it
        // This version is used for displaying results
        this.originalText = text;

        // Initialize a variable to store the cleaned version of the text
        // Cleaning includes making the text lowercase and removing spaces
        this.cleanedText = "";

        // Initialize a variable to store the reversed version of the text
        this.reversedText = "";
    }

    // This method prepares the text for comparison
    // by removing differences that should not affect palindromes
    cleanText() {

        // Convert the original text to lowercase
        // This prevents uppercase and lowercase letters
        // from affecting the palindrome comparison
        this.cleanedText = this.originalText.toLowerCase();

        // Remove all spaces from the text
        // \s matches whitespace characters
        // + means one or more spaces
        // g means "global" (remove ALL spaces)
        this.cleanedText = this.cleanedText.replace(/\s+/g, "");
    }

    // This method reverses the cleaned text using a loop
    reverseText() {

        // Reset reversedText to an empty string
        // This ensures old values do not remain
        this.reversedText = "";

        // Loop through the cleaned text starting from the last character
        // i begins at the final index of the string
        // The loop runs until i reaches the first character
        for (var i = this.cleanedText.length - 1; i >= 0; i--) {

            // Add each character to reversedText
            // This builds the reversed string one character at a time
            this.reversedText += this.cleanedText[i];
        }
    }
    // METHOD: isPalindrome
    // This method checks whether the word or phrase
    // reads the same forward and backward
    isPalindrome() {

        // Compare the cleaned text to its reversed version
        // === ensures both value and type are the same
        if (this.cleanedText === this.reversedText) {

            // Return true if it is a palindrome
            return true;
        } else {

            // Return false if it is NOT a palindrome
            return false;
        }
    }
}

// This function runs automatically when the form is submitted
form.onsubmit = function () {

    // Retrieve the text that the user typed into the input field
    // .value gets the current contents of the input box
    var userText = input.value;

    // Create a new PalindromeChecker object
    // Pass the user's text into the class constructor
    var checker = new PalindromeChecker(userText);

    // Clean the text (convert to lowercase and remove spaces)
    checker.cleanText();

    // Reverse the cleaned text
    checker.reverseText();

    // Use the isPalindrome method to check the result
    if (checker.isPalindrome()) {

        // Display a success message if the input is a palindrome
        // innerHTML allows us to insert dynamic text
        result.innerHTML = `"${userText}" is a PALINDROME! 🎉`;

        // Change text color to green to indicate success
        result.style.color = "green";
    } else {

        // Display a failure message if the input is NOT a palindrome
        result.innerHTML = `"${userText}" is NOT a palindrome. Try again!`;

        // Change text color to red to indicate failure
        result.style.color = "red";
    }

    // Hide the form after submission
    // This prevents the user from submitting multiple times
    form.style.display = "none";

    // Display the continue button so the user can try again
    continueBtn.style.display = "inline-block";

    // Prevent the page from refreshing (default form behavior)
    return false;
};


// CONTINUE BUTTON FUNCTIONALITY

// This function runs when the continue button is clicked
continueBtn.onclick = function () {

    // Clear the input field so the user can type a new word
    input.value = "";

    // Clear the result text from the previous check
    result.innerHTML = "";

    // Show the form again for a new submission
    form.style.display = "block";

    // Hide the continue button until the next submission
    continueBtn.style.display = "none";
};
