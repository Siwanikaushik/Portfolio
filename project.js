document.addEventListener("DOMContentLoaded", function () {
    console.log("Projects page loaded successfully!");

    // Highlighting project cards on hover
    const projectCards = document.querySelectorAll(".project-card");

    projectCards.forEach(card => {
        card.addEventListener("mouseenter", () => {
            card.style.transform = "scale(1.05)";
            card.style.transition = "transform 0.3s ease";
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform = "scale(1)";
        });
    });

    // Responsive Adjustments
    function adjustLayout() {
        const container = document.querySelector('.container');
        const bottomNav = document.querySelector('.bottom-nav');

        if (window.innerWidth <= 768) {
            container.style.width = "90%";
            container.style.padding = "20px";
            bottomNav.style.flexDirection = "column";
            bottomNav.style.gap = "10px";
        } else {
            container.style.width = "800px";
            container.style.padding = "30px";
            bottomNav.style.flexDirection = "row";
            bottomNav.style.gap = "20px";
        }

        // Adjust project cards for small screens
        projectCards.forEach(card => {
            if (window.innerWidth <= 768) {
                card.style.padding = "15px";
                card.style.margin = "10px 0";
                card.style.fontSize = "14px";
            } else {
                card.style.padding = "20px";
                card.style.margin = "20px 0";
                card.style.fontSize = "16px";
            }
        });
    }

    // Adjust layout on load and resize
    adjustLayout();
    window.addEventListener('resize', adjustLayout);
});
