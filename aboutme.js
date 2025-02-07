document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.scroll-btn');

    buttons.forEach(button => {
        button.addEventListener('click', function (event) {
            event.preventDefault();
            window.location.href = this.getAttribute('href');
        });
    });

    function adjustLayout() {
        const aboutContainer = document.querySelector('.about-container');
        if (window.innerWidth <= 768) {
            aboutContainer.style.width = "90%";
            aboutContainer.style.height = "auto";
            aboutContainer.style.padding = "15px";
        } else if (window.innerWidth <= 1024) {
            aboutContainer.style.width = "75%";
            aboutContainer.style.height = "auto";
            aboutContainer.style.padding = "20px";
        } else {
            aboutContainer.style.width = "60%";
            aboutContainer.style.height = "70%";
        }
    }

    // Adjust layout on load and on resize
    adjustLayout();
    window.addEventListener('resize', adjustLayout);
});
