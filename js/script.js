// ===============================
// Dark / Light Theme Toggle
// ===============================

// Select the theme toggle button
const toggleButton = document.getElementById("theme-toggle");

// Add click event listener to switch themes
toggleButton.addEventListener("click", () => {
  // Toggle the "dark-mode" class on the body element
  document.body.classList.toggle("dark-mode");
});


// ===============================
// Contact Form Interaction
// ===============================

// Select the contact form and message display element
const form = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");

// Ensure the form exists before adding the event listener
if (form) {
  form.addEventListener("submit", function(event) {
    
    // Prevent page reload on form submission
    event.preventDefault();

    // Get the user's name input (if provided)
    const nameInput = document.getElementById("name");
    const senderName = nameInput && nameInput.value 
      ? nameInput.value.trim() 
      : "";

    // Display a personalized success message
    formMessage.textContent = senderName
      ? `Thank you, ${senderName}! Your message has been received. I will get back to you soon.`
      : "Thank you for your message! I will get back to you soon.";

    // Apply styling to the confirmation message
    formMessage.style.color = "green";
    formMessage.style.fontWeight = "600";

    // Clear the form fields after submission
    form.reset();

    // Optional: Automatically remove the message after 5 seconds
    setTimeout(() => {
      formMessage.textContent = "";
    }, 5000);
  });
}


