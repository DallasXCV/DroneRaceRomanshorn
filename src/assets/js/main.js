// FUNCTION TOGGLE TAGESABLAUF ICONS
document.addEventListener("DOMContentLoaded", function () {
    const icons = document.querySelectorAll('.icon');
    icons.forEach(function (icon) {
        icon.addEventListener('click', function () {
            this.classList.toggle('rotated');
            const contentId = this.id.replace('icon', 'content');
            const content = document.getElementById(contentId);
            if (content.style.display === 'flex') {
                content.style.display = 'none';
            } else {
                document.querySelectorAll('.content').forEach(function (c) {
                    c.style.display = 'none';
                });
                content.style.display = 'flex';
            }
        });
    });
});

// FUNCTION CHANGE COLOR NAVBAR
window.onscroll = function() {changeColorOnScroll()};
function changeColorOnScroll() {
    var element = document.getElementById("changeColor");
    var scrollPosition = window.scrollY;
    if (scrollPosition > 100) {
        element.classList.add("scrolled");
    } else {
        element.classList.remove("scrolled");
    }
}
// SCROLL TO TOP
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
