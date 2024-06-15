
// ----------- head animation stileing styling-------------//
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    const scrollPosition = window.scrollY;

    if (scrollPosition > 0) {
        header.classList.add('show');
    } else {
        header.classList.remove('show');
    }
});

// --------- body BG hide and show styling--------//
window.addEventListener('scroll', function() {
    const background = document.querySelector('#home .background');
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;

    if (scrollPosition > windowHeight / 2) {
        background.style.opacity = 0;
    } else {
        background.style.opacity = 1 - (scrollPosition / (windowHeight / 2));
    }
});

// -----------about section animation L&R-------------//
document.addEventListener('DOMContentLoaded', function() {
    const aboutSection = document.getElementById('about');
    const movingElements = document.querySelectorAll('.moving');
    let animationTriggered = false;

    function isElementInView(element) {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        const elementHeight = rect.height;

        return (
            rect.top >= windowHeight / 2 - elementHeight / 2 &&
            rect.bottom <= windowHeight / 2 + elementHeight / 2
        );
    }

    function handleAnimation() {
        if (animationTriggered) return;

        const rect = aboutSection.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;

        if (rect.top <= windowHeight / 2 && rect.bottom >= windowHeight / 2) {
            movingElements.forEach(function(element) {
                element.classList.add('in-view');
            });
            animationTriggered = true;
            window.removeEventListener('scroll', handleAnimation);
        }
    }

    window.addEventListener('scroll', handleAnimation);
    handleAnimation(); // Check on load in case already in view
});