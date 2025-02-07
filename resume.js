document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("toggleResume");
    const resumeContainer = document.getElementById("resumeContainer");
    const bottomNav = document.querySelector(".bottom-nav");

    // Ensure buttons are not disabled
    toggleButton.disabled = false;

    // Toggle Resume Display
    toggleButton.addEventListener("click", function () {
        if (resumeContainer.classList.contains("hidden")) {
            resumeContainer.classList.remove("hidden");
            toggleButton.textContent = "Hide Resume";
            bottomNav.style.display = "none"; // Hide navigation buttons
        } else {
            resumeContainer.classList.add("hidden");
            toggleButton.textContent = "Show Resume";
            bottomNav.style.display = "flex"; // Show navigation buttons
        }
    });

    // Responsive Adjustments
    function adjustLayout() {
        const container = document.querySelector('.container');

        if (window.innerWidth <= 768) {
            container.style.width = "90%";
            container.style.padding = "15px";
            toggleButton.style.width = "100%";
            toggleButton.style.fontSize = "14px";
        } else {
            container.style.width = "600px";
            container.style.padding = "20px";
            toggleButton.style.width = "auto";
            toggleButton.style.fontSize = "16px";
        }
    }

    // Adjust layout on load and resize
    adjustLayout();
    window.addEventListener('resize', adjustLayout);
});
