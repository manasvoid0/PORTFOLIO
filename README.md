# Portfolio

A single-page developer portfolio (dark-navy/zinc theme, green accent, isometric hero graphic), built as a **Vite + React** app. The design is inspired by [brittanychiang.com/v4](https://v4.brittanychiang.com/) with typography/colors matched to [victoreke.com](https://victoreke.com).

## Run

```bash
npm install
npm run dev      # dev server at http://localhost:5173
npm run build    # production build → dist/
npm run preview  # serve the built dist/
```

## Structure

```
portfolio/
├── index.html              # Vite entry (mounts #root, loads fonts)
├── vite.config.js
├── public/
│   └── fonts/              # Incognito + GitLab Mono woff2 (served at /fonts)
└── src/
    ├── main.jsx            # React entry
    ├── App.jsx             # page composition
    ├── index.css           # all styles (theme, layout, animations) — unchanged design
    ├── data.js             # content: nav, socials, skills, jobs, projects
    ├── hooks/
    │   └── useScrollReveal.js   # IntersectionObserver reveal-on-scroll
    └── components/
        ├── Header.jsx           # nav hide/show on scroll, mobile menu
        ├── SideElements.jsx     # fixed social + email rails
        ├── Hero.jsx
        ├── IsoGraphic.jsx       # animated isometric cube SVG
        ├── About.jsx
        ├── Experience.jsx       # tabbed jobs with sliding highlight
        ├── FeaturedProjects.jsx
        ├── OtherProjects.jsx
        ├── Contact.jsx
        ├── Footer.jsx
        └── Icons.jsx            # shared SVG icons
```

## Customize

- **Content**: edit `src/data.js` (jobs, projects, socials, skills) and the copy in the section components.
- **Theme / fonts**: CSS variables at the top of `src/index.css` (`--navy`, `--green`, font stacks).
- **Hero graphic**: `src/components/IsoGraphic.jsx`.

## Credit

Design credit to Brittany Chiang's v4 and Victor Eke's portfolio. Independent re-implementation with original code and placeholder content.
