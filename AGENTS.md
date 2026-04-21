# AGENTS.md

Guidance for AI coding agents working in this repository.

## Project Type
- Static personal website hosted on GitHub Pages.
- No build step required for standard edits.
- Primary stack: HTML + CSS + Bootstrap + jQuery includes.

## Key File Map
- Main landing page: [index.html](index.html)
- Shared navigation include: [header.html](header.html)
- Shared footer include: [footer.html](footer.html)
- Global site styles: [assets/light-dark-style.css](assets/light-dark-style.css)
- Theme behavior: [assets/theme-toggle.js](assets/theme-toggle.js)
- Additional standalone pages: [projects.html](projects.html), [publications.html](publications.html), [researches.html](researches.html), [awards.html](awards.html), [misc.html](misc.html), [services.html](services.html), [meet.html](meet.html)
- Basic repo note: [README.md](README.md)

## Local Preview
- Quick local server:
  - `python3 -m http.server 8000`
- Open in browser:
  - `http://localhost:8000`

## Architecture and Conventions
- Most pages inject shared chrome with jQuery:
  - `#headerIncluder` loads [header.html](header.html)
  - `#footerIncluder` loads [footer.html](footer.html)
- Keep styles centralized in [assets/light-dark-style.css](assets/light-dark-style.css); avoid large per-page inline style blocks.
- Keep JavaScript behavior centralized in [assets/theme-toggle.js](assets/theme-toggle.js) or small page-level scripts when necessary.
- Prefer relative links between local pages (for GitHub Pages compatibility).

## Editing Rules for Agents
- Preserve existing content meaning when modernizing layout.
- Keep desktop and mobile responsiveness intact.
- Reuse template classes already introduced (`page-shell`, `page-hero`, `content-card`, `entry-item`, etc.) for consistency.
- Do not reformat or replace minified vendor assets in [assets/bootstrap.min.css](assets/bootstrap.min.css), [assets/bootstrap.min.js](assets/bootstrap.min.js), [assets/jquery.min.js](assets/jquery.min.js).
- Avoid introducing framework migrations unless explicitly requested.

## Content Update Checklist
When updating profile data (roles, publications, links, achievements):
- Update the main bio and highlights in [index.html](index.html).
- Update relevant standalone pages ([publications.html](publications.html), [researches.html](researches.html), [awards.html](awards.html), [services.html](services.html), [misc.html](misc.html)).
- Ensure social/profile links remain consistent across pages.
- If publication data is sourced externally (e.g., BibBase on [publications.html](publications.html)), update source references rather than duplicating entries.

## Validation Before Finishing
- Run problems check on touched files.
- Manually verify that updated pages load with header/footer includes.
- Confirm dark/light theme still toggles correctly after style or markup edits.
