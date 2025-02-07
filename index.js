document.addEventListener("DOMContentLoaded", function () {
    console.log("Portfolio page loaded successfully!");

    // Responsive Navbar Toggle
    const menuToggle = document.createElement("div");
    menuToggle.classList.add("menu-toggle");
    menuToggle.innerHTML = "☰";
    document.querySelector(".navbar").prepend(menuToggle);

    const navbar = document.querySelector(".navbar");
    menuToggle.addEventListener("click", function () {
        navbar.classList.toggle("active");
    });

    // Adjust layout based on screen size
    function adjustLayout() {
        const homeSection = document.querySelector(".home");
        const nameSection = document.querySelector(".name");
        const imageSection = document.querySelector(".img img");

        if (window.innerWidth <= 768) {
            homeSection.style.flexDirection = "column";
            homeSection.style.textAlign = "center";
            nameSection.style.marginLeft = "0";
            imageSection.style.width = "100%";
            imageSection.style.height = "auto";
        } else {
            homeSection.style.flexDirection = "row";
            homeSection.style.textAlign = "left";
            nameSection.style.marginLeft = "10%";
            imageSection.style.width = "750px";
            imageSection.style.height = "550px";
        }
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll(".navbar a").forEach(link => {
        link.addEventListener("click", function (event) {
            if (this.getAttribute("href").startsWith("#")) {
                event.preventDefault();
                const target = document.querySelector(this.getAttribute("href"));
                if (target) {
                    target.scrollIntoView({ behavior: "smooth" });
                }
            }
        });
    });

    // Adjust layout on load and resize
    adjustLayout();
    window.addEventListener("resize", adjustLayout);
});
