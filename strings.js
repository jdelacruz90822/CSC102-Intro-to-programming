// Access the form using required forms[] method
let form = document.forms["mainForm"];

/*
    handleSubmit(event) is called directly from the HTML form:
    <form ... onsubmit="handleSubmit(event)">
*/
function handleSubmit(event) {
    // Prevent the form from refreshing the page
    event.preventDefault();

    // Get first name input
    let first = document.getElementById("firstName").value;

    // Get last name input
    let last = document.getElementById("lastName").value;

    // Get zip code input
    let zip = document.getElementById("zipCode").value;

    // Message output area
    let output = document.getElementById("messageArea");

    // Combine first name + space + last name
    let fullName = first + " " + last;

    // Check if the full name is too long (>20 characters)
    if (fullName.length > 20) {
        output.innerHTML = "Your full name must be under 20 characters.";
        return;
    }

    // Check if zip code is 5 characters AND all digits
    if (zip.length !== 5 || isNaN(zip)) {
        output.innerHTML = "Zip code must be exactly 5 digits.";
        return;
    }

    // If everything is valid → show secret message
    output.innerHTML =
        "Access Granted!<br><br><b>Your secret message:<br>HOLA, AND THANKS FOR CHECKING OUT MY PAGE!</b>";
}
