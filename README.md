# Personal Website

A static portfolio site showcasing professional experience, academic
background, and athletic career, built with plain HTML, CSS, and JavaScript
and deployed on [Vercel](https://vercel.com).

**Live site:** [personalwebsite-yourname.vercel.app](https://personalwebsite-yourname.vercel.app) <!-- Update with your actual deployment URL -->

## Tech stack

- HTML5
- CSS3 (no framework — custom design system defined in `css/style.css`)
- Vanilla JavaScript (mobile navigation and scroll-based section highlighting)
- Deployed via Vercel

## Project structure

```
personalwebsite/
├── index.html          # Page content and structure
├── css/
│   └── style.css       # Styling and layout
├── js/
│   └── script.js        # Mobile menu toggle and scroll highlighting
├── images/              # Site images
└── README.md
```

## Getting started

Clone the repository and open `index.html` directly in a browser — no build
step or dependencies are required.

```bash
git clone https://github.com/yourusername/personalwebsite.git
cd personalwebsite
open index.html   # or double-click the file / use "Open in Browser" in your editor
```

## Content

The site is organized into five sections, each editable directly in
`index.html`:

| Section | Description |
|---|---|
| Hero | Name, tagline, and profile photo |
| About | Short personal introduction |
| Professional Experience | Work history, listed as repeatable entry blocks |
| Academic Record | Education history, listed as repeatable entry blocks |
| Athletic Career | Sporting achievements, listed as repeatable entry blocks |
| Contact | Email and social/professional links |

Experience, academic, and athletic entries share a common markup pattern:

```html
<article class="entry">
  <div class="entry__when">
    <span class="entry__dates">2023 — 2025</span>
  </div>
  <div class="entry__what">
    <h3 class="entry__role">Role or Title</h3>
    <p class="entry__org">Organization · Location</p>
    <p class="entry__desc">Brief description of the role or achievement.</p>
  </div>
</article>
```

Duplicate this block to add entries, or remove it to delete one.

### Adding images

1. Add image files to the `images/` directory.
2. Replace the relevant placeholder `<div class="photo-placeholder">...</div>` in
   `index.html` with an `<img>` using the `.photo` class (not `.photo-placeholder`,
   which is reserved for the empty-state box):

   ```html
   <!-- Hero photo (square) -->
   <img src="images/profile.jpg" alt="Descriptive alt text" class="photo">

   <!-- Gallery photo (4:3) -->
   <img src="images/sport-1.jpg" alt="Descriptive alt text" class="photo photo--sm">
   ```

   `.photo` handles sizing and cropping (`object-fit: cover`) so every image
   fills its box cleanly regardless of its original dimensions. If a photo's
   crop cuts off the wrong part (e.g. someone's head), adjust `object-position`
   for that image in `style.css`, or override it inline:

   ```html
   <img src="images/profile.jpg" alt="..." class="photo" style="object-position: center 20%;">
   ```

## Deployment

This project deploys as a static site with no build configuration required.

1. Push changes to the `main` branch:

   ```bash
   git add .
   git commit -m "Update content"
   git push origin main
   ```

2. On [vercel.com](https://vercel.com), import the repository via **Add New → Project**.
3. Leave the framework preset as **Other**, with no build command or output directory.
4. Deploy. Vercel will assign a live URL and automatically redeploy on every
   push to `main`.

## License

This project is personal in nature; feel free to use the structure and code
as a reference for your own site.