document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.scroll-btn');

    buttons.forEach(button => {
        button.addEventListener('click', function (event) {
            event.preventDefault();
            window.location.href = this.getAttribute('href');
        });
    });
});
