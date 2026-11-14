// Homepage button: show a simple message when the button is present.
const adoptButton = document.getElementById("adopt-button");
const homeMessage = document.getElementById("message");

if (adoptButton && homeMessage) {
    adoptButton.addEventListener("click", function () {
        window.location.href = "pets.html";
    });
}

// Adoption certificate: create a personalized certificate after form submission.
const adoptionForm = document.getElementById("adoption-form");
const certificateArea = document.getElementById("certificate-area");

if (adoptionForm && certificateArea) {
    const petSelect = document.getElementById("pet-name");
    const params = new URLSearchParams(window.location.search);
    const selectedPet = params.get("pet");

    if (selectedPet && ["Tom", "Bob", "Gary"].includes(selectedPet)) {
        petSelect.value = selectedPet;
    }

    adoptionForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const adopterName = document.getElementById("adopter-name").value.trim();
        const petName = petSelect.value;

        if (!adopterName || !petName) {
            return;
        }

        document.getElementById("certificate-adopter").textContent = adopterName;
        document.getElementById("certificate-pet").textContent = petName;
        document.getElementById("certificate-date").textContent =
            new Date().toLocaleDateString();

        certificateArea.hidden = false;
        certificateArea.scrollIntoView({ behavior: "smooth", block: "start" });
    });

    const printButton = document.getElementById("print-certificate");
    printButton.addEventListener("click", function () {
        window.print();
    });
}


// Contact Us page: show a confirmation after the visitor submits the demo form.
const contactForm = document.getElementById("contact-form");
const contactSuccess = document.getElementById("contact-success");

if (contactForm && contactSuccess) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();
        contactSuccess.hidden = false;
        contactForm.reset();
        contactSuccess.scrollIntoView({ behavior: "smooth", block: "center" });
    });
}
