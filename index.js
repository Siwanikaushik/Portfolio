document.addEventListener("DOMContentLoaded", function () {
    console.log("Index page loaded successfully!");

    // Toggle Mobile Menu
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".nav-menu");

    if (menuToggle) {
        menuToggle.addEventListener("click", function () {
            navMenu.classList.toggle("active");
        });
    }

    // Smooth Scrolling for Navigation Links
    const scrollLinks = document.querySelectorAll(".scroll-link");
    scrollLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 60, // Adjust based on fixed navbar height
                    behavior: "smooth"
                });
            }
        });
    });

    // Adjust layout dynamically based on screen size
    function adjustLayout() {
        const homeSection = document.querySelector(".home");
        const nameElement = document.querySelector(".name");

        if (window.innerWidth <= 768) {
            homeSection.style.flexDirection = "column";
            nameElement.style.fontSize = "20px";
            nameElement.style.textAlign = "center";
        } else {
            homeSection.style.flexDirection = "row";
            nameElement.style.fontSize = "25px";
        }
    }

    // Adjust layout on load and resize
    adjustLayout();
    window.addEventListener("resize", adjustLayout);
});
