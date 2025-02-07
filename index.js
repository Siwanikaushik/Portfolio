document.addEventListener("DOMContentLoaded", function () {
    console.log("Portfolio homepage loaded successfully!");

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
        } else {
            nameSection.style.textAlign = "left";
            nameSection.style.marginLeft = "10%";
            nameSection.style.fontSize = "20px";

            imgSection.style.display = "block";
            imgSection.style.marginTop = "0";
        }
    }

    // Adjust layout on load and resize
    adjustLayout();
    window.addEventListener('resize', adjustLayout);
});
