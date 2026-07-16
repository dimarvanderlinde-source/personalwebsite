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

// Lightbox — click any .photo image to view it enlarged
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxClose = document.getElementById('lightboxClose');

function openLightbox(src, alt) {
    lightboxImg.src = src;
    lightboxImg.alt = alt || '';
    lightbox.hidden = false;
    document.body.style.overflow = 'hidden'; // prevent background scroll
}

function closeLightbox() {
    lightbox.hidden = true;
    lightboxImg.src = '';
    document.body.style.overflow = '';
}

if (lightbox) {
    document.querySelectorAll('.photo').forEach(img => {
        img.addEventListener('click', () => openLightbox(img.src, img.alt));
    });

    lightboxClose.addEventListener('click', closeLightbox);

    // Click the dark backdrop (not the image itself) to close
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) closeLightbox();
    });

    // Close on Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !lightbox.hidden) closeLightbox();
    });
}