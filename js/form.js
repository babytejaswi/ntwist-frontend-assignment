document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Show confirmation message
  document.getElementById("confirmation").classList.remove("hidden");

  // Clear the form
  this.reset();
});
