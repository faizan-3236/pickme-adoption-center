// Homepage button: displays the required JavaScript alert, then opens the pets page.
function adoptNow() {
  window.alert("Thank you for your interest in adopting a pet!");
  window.location.href = "pets.html";
}

// Adoption form: creates a personalized certificate.
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("adoption-form");
  const petSelect = document.getElementById("pet-name");

  // If a pet was selected on the Available Pets page, preselect it here.
  const selectedPet = new URLSearchParams(window.location.search).get("pet");
  if (petSelect && ["Tom", "Bob", "Gary"].includes(selectedPet)) {
    petSelect.value = selectedPet;
  }

  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      const adopterName = document.getElementById("adopter-name").value.trim();
      const petName = petSelect.value;

      if (!adopterName || !petName) {
        window.alert("Please enter your name and select a pet.");
        return;
      }

      document.getElementById("certificate-owner").textContent = adopterName;
      document.getElementById("certificate-pet").textContent = petName;
      document.getElementById("certificate-date").textContent =
        new Date().toLocaleDateString();

      document.getElementById("certificate").hidden = false;

      // Required console.log example: records the successful demo form submission.
      console.log("Adoption certificate generated for " + adopterName + " and " + petName + ".");
      document.getElementById("certificate").scrollIntoView({ behavior: "smooth" });
    });
  }
});
