// ============================
// EMAILJS INIT
// ============================

(function() {
  emailjs.init("iDLYzTu-vnmHippR1");
})();

// ============================
// CONTACT FORM LOGIC
// ============================

const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");
const submitBtn = document.getElementById("submit-btn");
const spinner = document.getElementById("spinner");
const btnText = document.getElementById("btn-text");

if (form) {
  form.addEventListener("submit", function(event) {
    event.preventDefault();

    // Honeypot spam protection
    if (document.getElementById("company").value !== "") {
      return;
    }

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Email validation
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/;
    if (!emailPattern.test(email)) {
      status.innerHTML = "Please enter a valid email.";
      status.className = "error";
      return;
    }

    submitBtn.disabled = true;
    spinner.style.display = "inline-block";
    btnText.innerText = "Sending...";

    const templateParams = {
      from_name: name,
      from_email: email,
      message: message
    };

    emailjs.send(
      "service_fydgqkf",
      "template_1qsyj48",
      templateParams
    )
    .then(function() {

      status.innerHTML = "✅ Message sent successfully!";
      status.className = "success";

      form.reset();
      resetButton();

    })
    .catch(function() {

      status.innerHTML = "❌ Failed to send message.";
      status.className = "error";

      resetButton();
    });
  });
}

// ============================
// HELPER FUNCTION
// ============================

function resetButton() {
  submitBtn.disabled = false;
  spinner.style.display = "none";
  btnText.innerText = "Contact Me";
}