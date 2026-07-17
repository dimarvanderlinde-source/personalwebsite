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

// Lightbox — click any .photo image to view it enlarged, at full source quality
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxClose = document.getElementById('lightboxClose');

function openLightbox(sourceImg) {
    // Reset any inherited sizing so the enlarged view always scales cleanly,
    // regardless of the crop/aspect-ratio rules applied to the thumbnail.
    lightboxImg.style.objectFit = 'contain';
    lightboxImg.style.objectPosition = 'center';
    lightboxImg.style.width = 'auto';
    lightboxImg.style.height = 'auto';

    // Use the thumbnail's full, uncropped source file — never a resized copy —
    // so the enlarged photo is exactly as sharp as the original upload.
    lightboxImg.src = sourceImg.currentSrc || sourceImg.src;
    lightboxImg.alt = sourceImg.alt || '';

    lightbox.hidden = false;
    document.body.style.overflow = 'hidden'; // prevent background scroll
}

function closeLightbox() {
    lightbox.hidden = true;
    lightboxImg.removeAttribute('src');
    document.body.style.overflow = '';
}

if (lightbox) {
    document.querySelectorAll('.photo').forEach(img => {
        img.addEventListener('click', () => openLightbox(img));
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