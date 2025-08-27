const form = document.getElementById("contactForm");
const message = document.getElementById("formMessage");
const spinner = document.getElementById("loadingSpinner");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  // Show spinner + hide old messages
  spinner.style.display = "block";
  message.style.display = "none";

  emailjs.sendForm("service_jjpahzn", "template_1e8ymlm", this)
    .then(() => {
      spinner.style.display = "none"; // hide spinner
      message.style.display = "block";
      message.style.color = "green";
      message.textContent = "✅ Message sent successfully!";
      form.reset();
    }, (error) => {
      spinner.style.display = "none"; // hide spinner
      message.style.display = "block";
      message.style.color = "red";
      message.textContent = "❌ Failed to send message. Please try again.";
      console.error("EmailJS Error:", error);
    });
});
