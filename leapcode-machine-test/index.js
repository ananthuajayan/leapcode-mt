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
// culsor animation
// Select the bubble element
const cursorBubble = document.querySelector('.cursor-bubble');

document.addEventListener('mousemove', (event) => {
    const x = event.pageX;
    const y = event.pageY;
    cursorBubble.style.transform = `translate(${x - 10}px, ${y - 10}px)`;
});

document.querySelectorAll('a, button').forEach((element) => {
    element.addEventListener('mouseenter', () => {
        cursorBubble.classList.add('grow'); 
    });
    element.addEventListener('mouseleave', () => {
        cursorBubble.classList.remove('grow');
    });
});


