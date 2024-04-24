document.addEventListener("DOMContentLoaded", function() {
    const icons = document.querySelectorAll('.icon');

    icons.forEach(function(icon) {
        icon.addEventListener('click', function() {
            this.classList.toggle('rotated');
            const contentId = this.id.replace('icon', 'content');
            const content = document.getElementById(contentId);

            if (content.style.display === 'flex') {
                content.style.display = 'none';
            } else {
                document.querySelectorAll('.content').forEach(function(c) {
                    c.style.display = 'none';
                });
                content.style.display = 'flex';
            }
        });
    });
});

document.querySelector('a[href^="#"]').addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href'); 
    const targetElement = document.querySelector(targetId); 
    if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
});


function scrollToTop() {
    // Scroll to the top of the page smoothly
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
