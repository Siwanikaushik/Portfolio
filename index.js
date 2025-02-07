document.addEventListener("DOMContentLoaded", function () {
    console.log("Portfolio homepage loaded successfully!");

    // Responsive Navbar Toggle
    const navbar = document.querySelector(".navbar");
    const navLinks = navbar.querySelectorAll("a");
    
    // Create a menu button for mobile view
    const menuToggle = document.createElement("button");
    menuToggle.innerHTML = "☰"; // Hamburger menu icon
    menuToggle.classList.add("menu-toggle");

    // Insert the button before the navbar links
    navbar.prepend(menuToggle);

    function toggleMenu() {
        navbar.classList.toggle("active");
    }

    menuToggle.addEventListener("click", toggleMenu);

    // Close menu when a link is clicked on mobile
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            if (window.innerWidth <= 768) {
                navbar.classList.remove("active");
            }
        });
    });

    // Adjust layout for different screen sizes
    function adjustLayout() {
        const nameSection = document.querySelector('.name');
        const imgSection = document.querySelector('.img');

        if (window.innerWidth <= 768) {
            nameSection.style.textAlign = "center";
            nameSection.style.margin = "0 auto";
            nameSection.style.fontSize = "16px";

            imgSection.style.display = "flex";
            imgSection.style.justifyContent = "center";
            imgSection.style.marginTop = "20px";
            imgSection.querySelector("img").style.width = "100%"; // Make image responsive
            imgSection.querySelector("img").style.height = "auto";
        } else {
            nameSection.style.textAlign = "left";
            nameSection.style.marginLeft = "10%";
            nameSection.style.fontSize = "20px";

            imgSection.style.display = "block";
            imgSection.style.marginTop = "0";
            imgSection.querySelector("img").style.width = "750px";
            imgSection.querySelector("img").style.height = "550px";
        }
    }

    // Adjust layout on load and resize
    adjustLayout();
    window.addEventListener("resize", adjustLayout);
});
