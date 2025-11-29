// Get reference to the form on the page
const form = document.getElementById("mainForm");

// Override default form behavior
form.onsubmit = function(event) {

    // Prevent form from refreshing the page
    event.preventDefault();

    // Get values from text inputs
    let first = document.getElementById("firstName").value.trim();
    let last = document.getElementById("lastName").value.trim();
    let zip = document.getElementById("zip").value.trim();

    // Combine first and last name with a space
    let fullName = first + " " + last;

    // Reference to the output message area
    let msg = document.getElementById("message");

    // Validate full name length
    if (fullName.length > 20) {
        msg.innerHTML = " Your full name must be 20 characters or fewer.";
        msg.style.color = "red";
        return; // Stop validation
    }

    // Validate ZIP code is exactly 5 digits
    if (!/^[0-9]{5}$/.test(zip)) {
        msg.innerHTML = " ZIP code must be exactly 5 digits long.";
        msg.style.color = "red";
        return; // Stop validation
    }

    // If all inputs are valid → show secret message
    msg.innerHTML = 
        " SECRET MESSAGE:<br><br>Welcome " + 
        fullName + "!<br>You have unlocked the hidden message! 🎉";
    msg.style.color = "green";
};
