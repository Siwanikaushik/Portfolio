document.addEventListener("DOMContentLoaded", function () {
    console.log("Experience page loaded successfully!");

    // Hover effect logging
    const experienceCards = document.querySelectorAll(".experience-card");
    experienceCards.forEach(card => {
        card.addEventListener("mouseenter", () => {
            console.log("Hovered over: " + card.querySelector("h2").textContent);
        });
    });

    // Buttons logging
    const buttons = document.querySelectorAll(".bottom-nav button");
    buttons.forEach(button => {
        button.addEventListener("click", function () {
            console.log("Navigating to: " + this.textContent);
        });
    });
});
