const toggleButton = document.getElementById("theme-toggle");
const form = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");

if (toggleButton) {
  toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    const isDarkMode = document.body.classList.contains("dark-mode");
    toggleButton.textContent = isDarkMode ? "Light Mode" : "Dark Mode";
  });
}

if (form) {
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const nameInput = document.getElementById("name");
    const senderName = nameInput && nameInput.value
      ? nameInput.value.trim()
      : "";

    formMessage.textContent = senderName
      ? `Thank you, ${senderName}! Your message has been received. I will get back to you soon.`
      : "Thank you for your message! I will get back to you soon.";

    formMessage.style.color = "green";
    formMessage.style.fontWeight = "600";
    formMessage.classList.remove("hidden");

    form.reset();

    setTimeout(() => {
      formMessage.textContent = "";
      formMessage.classList.add("hidden");
    }, 5000);
  });
}