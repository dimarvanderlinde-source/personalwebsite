# Personal Website

A static site — professional experience, academic record, and athletic career.

## File structure

```
personalwebsite/
├── index.html        ← all page content lives here
├── css/
│   └── style.css      ← all styling
├── js/
│   └── script.js       ← mobile menu + scroll highlighting
├── images/             ← put your photos in here
└── README.md
```

## Adding your content

Open `index.html` in IntelliJ. Every section has an HTML comment marking what
to replace:

- **Hero**: your name, tagline, and a profile photo.
- **About**: a short paragraph in your own words.
- **Professional Experience / Academic Record / Athletic Career**: each is a
  list of `<article class="entry">` blocks. Copy/paste the block to add more
  entries, or delete extras.
- **Contact**: update the email, LinkedIn, and GitHub links.

## Adding photos

1. Drop image files into `images/` (e.g. `images/profile.jpg`,
   `images/sport-1.jpg`).
2. In `index.html`, find the `<div class="photo-placeholder">` you want to
   replace and swap it for:
   ```html
   <img src="images/profile.jpg" alt="Your Name" class="photo-placeholder">
   ```
   (Keep the class if you want it to inherit the same sizing, or write a new
   rule in `style.css`.)

## Running it locally

No build step — just open `index.html` in a browser, or in IntelliJ right-click
it and choose **Open in Browser**.

## Deploying to Vercel

1. Push this project to your GitHub repo (`git add . && git commit -m "Initial site" && git push`).
2. Go to [vercel.com](https://vercel.com), sign in with GitHub, and click
   **Add New → Project**.
3. Select this repository. Since it's a static site, leave the framework
   preset as **Other** — no build command or output directory needed.
4. Click **Deploy**. Vercel will give you a live URL, and every future push
   to your repo will auto-deploy.