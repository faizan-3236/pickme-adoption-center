const adoptButton = document.getElementById("adopt-button");
const message = document.getElementById("message");

adoptButton.addEventListener("click", function () {
    message.textContent = "Thank you for your interest in adopting! Please contact us for more information.";
});
