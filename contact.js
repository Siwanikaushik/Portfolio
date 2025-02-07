document.addEventListener("DOMContentLoaded", function () {
    console.log("Contact page loaded successfully!");

    const form = document.getElementById("contactForm");
    const statusMessage = document.getElementById("statusMessage");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        if (name && email && message) {
            statusMessage.style.color = "green";
            statusMessage.textContent = "Message sent successfully!";
            form.reset();
        } else {
            statusMessage.style.color = "red";
            statusMessage.textContent = "Please fill out all fields.";
        }
    });

    function adjustLayout() {
        const container = document.querySelector('.container');
        if (window.innerWidth <= 768) {
            container.style.width = "90%";
            container.style.padding = "15px";
        } else if (window.innerWidth <= 1024) {
            container.style.width = "75%";
            container.style.padding = "20px";
        } else {
            container.style.width = "600px";
            container.style.padding = "20px";
        }
    }

    // Adjust layout on load and on resize
    adjustLayout();
    window.addEventListener('resize', adjustLayout);
});
