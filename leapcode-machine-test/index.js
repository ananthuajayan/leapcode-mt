// For header background change on scroll
window.addEventListener("scroll", function() {
    const header = document.getElementById("mainHeader");
    if (window.scrollY > 50) { 
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
});

// Toggle menu icons between bars and x-mark
function toggleMenu() {
    const menu = document.querySelector('.menu');
    const iconBars = document.getElementById('menuIconBars');
    const iconClose = document.getElementById('menuIconClose');

    menu.classList.toggle('active');

    if (menu.classList.contains('active')) {
        iconBars.style.visibility = 'hidden';
        iconClose.style.visibility = 'visible';
    } else {
        iconBars.style.visibility = 'visible';
        iconClose.style.visibility = 'hidden';
    }
}
