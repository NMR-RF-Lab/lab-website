# NMR RF Lab website

A plain static site: five HTML pages, one stylesheet, one tiny script. No build step/installation.

```
index.html  research.html  courses.html  people.html  contact.html
assets/css/style.css   colors, type and layout (palette is in :root at the top)
assets/js/site.js      assembles the email link
assets/img/            photos, figures, logos, favicon
assets/fonts/          self-hosted web fonts (Newsreader, IBM Plex Sans, IBM Plex Mono)
```

## Hosting

Upload the contents of this folder to any static host (GitHub Pages, Netlify, Cloudflare Pages, a university web server). All links are relative, so it also works from a subfolder.

## Editing

Open the page in a text editor and change the text. The header and footer are repeated in each of the five pages, so a navigation change has to be made in all five.

- New publication: copy an `<li>` in the `pubs` list in `research.html`.
- New student: copy an `<article class="person">` block in `people.html`.
- New alumnus: copy an `<li>` in the matching `rows` list in `people.html`.
