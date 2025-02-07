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

    function adjustLayout() {
        const container = document.querySelector('.container');
        if (window.innerWidth <= 768) {
            container.style.width = "90%";
            container.style.padding = "15px";
        } else if (window.innerWidth <= 1024) {
            container.style.width = "75%";
            container.style.padding = "20px";
        } else {
            container.style.width = "800px";
            container.style.padding = "20px";
        }

        // Adjust experience cards for smaller screens
        experienceCards.forEach(card => {
            if (window.innerWidth <= 768) {
                card.style.padding = "10px";
                card.style.margin = "10px 0";
            } else {
                card.style.padding = "15px";
                card.style.margin = "20px 0";
            }
        });
    }

    // Adjust layout on load and on resize
    adjustLayout();
    window.addEventListener('resize', adjustLayout);
});
