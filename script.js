const hamburger = document.querySelector(".hamburger");
const navlink = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    navlink.classList.toggle("active");
});

// Initialize EmailJS
emailjs.init("ACb-h-pmwH2xudV1w");

const form = document.querySelector(".form-cont");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm(
        "service_4eb4ny9",
            "template_evmfft5",
        this
    )
    .then(function () {
        alert("Message sent successfully!");
        form.reset();
    })
    .catch(function (error) {
        alert("Failed to send message.");
        console.log(error);
    });
});
