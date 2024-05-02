document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission
    
    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    
    // Validate form fields (you can add more validation if needed)
    if (name && email && password) {
        // Call the signup function with form data
        signup(name, email, password);
    } else {
        alert("Please fill in all fields.");
    }
});

function signup(name, email, password) {
    // You can use AJAX to send the form data to your backend
    // Example using fetch API
    fetch("/signup", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: name,
            email: email,
            password: password
        })
    })
    .then(response => {
        if (response.ok) {
            // Redirect or show success message
            alert("Signup successful!");
            window.location.href = "/login"; // Redirect to login page
        } else {
            // Handle error response
            alert("Signup failed. Please try again.");
        }
    })
    .catch(error => {
        console.error("Error:", error);
        alert("An error occurred. Please try again later.");
    });
}
