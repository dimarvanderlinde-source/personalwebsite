// Mobile menu toggle
const railToggle = document.getElementById('railToggle');
const railNav = document.getElementById('railNav');

if (railToggle && railNav) {
    railToggle.addEventListener('click', () => {
        const isOpen = railNav.classList.toggle('is-open');
        railToggle.setAttribute('aria-expanded', String(isOpen));
    });

    // Close menu after tapping a link (mobile)
    railNav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            railNav.classList.remove('is-open');
            railToggle.setAttribute('aria-expanded', 'false');
        });
    });
}

// Highlight the active section in the index rail while scrolling
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.rail__link');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            navLinks.forEach(link => {
                link.classList.toggle('is-active', link.getAttribute('href') === `#${id}`);
            });
        }
    });
}, { rootMargin: '-40% 0px -50% 0px' });

sections.forEach(section => observer.observe(section));