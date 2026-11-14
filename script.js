const adoptButton = document.getElementById("adopt-button");
const message = document.getElementById("message");

if (adoptButton && message) {
    adoptButton.addEventListener("click", function () {
        message.textContent = "Thank you for your interest in adopting! Visit the Available Pets page to learn more.";
    });
}
