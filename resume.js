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

    // Ensure resume file exists
    fetch("Siwani_Resume.pdf")
        .then(response => {
            if (!response.ok) {
                console.error("Resume file not found!");
                downloadButton.style.display = "none"; // Hide if missing
            }
        })
        .catch(() => console.error("Error fetching resume file."));
});
