DataPulse Landing Page
Landing page for DataPulse — a lightweight internal metrics API & dashboard platform. This repository contains a single-page static site intended for GitHub Pages deployment. [github.com]
Live Demo

GitHub Pages: https://strahinjavasiljevic.github.io/DataPulse-Landing-Page/ (if GitHub Pages is enabled for this repo) [github.com]
Repository: StrahinjaVasiljevic/DataPulse-Landing-Page


What's inside

index.html — the full landing page (HTML/CSS/JS inline or linked depending on your implementation). [github.com]


This repo is intentionally minimal: no build tools, no dependencies, no frameworks — just a static page that runs anywhere. [github.com]


Quick start (local)

Option A - open directly

Clone the repo
Open index.html in your browser

git clone https://github.com/StrahinjaVasiljevic/DataPulse-Landing-Page.git
cd DataPulse-Landing-Page
# open index.html in a browser

Option B - run a tiny local server (recommended)
A local server avoids browser restrictions for some assets/scripts.
Python
python -m http.server 5500
# open http://localhost:5500
Node
npx serve .
# open the shown local URL
``

Deploy to GitHub Pages

Go to Settings → Pages
Under Build and deployment, select:

Source: Deploy from a branch
Branch: main / folder: / (root)


Save — after a minute, your site will be published.


How to update content
Open index.html and edit:

Hero headline + subtitle
Sections (problem, solution, “show me it’s real”, CTA)
Links (repo, roadmap, ADR, API endpoint)
Colors / typography / spacing (if included inline CSS)

Recommended content blocks (if you want the landing to feel “real”)
These sections help the landing page avoid looking like a generic template:

Concrete, opinionated Hero message (“Stop asking engineers for numbers…”)
“Show me it’s real” section with an example API request (curl)
A simple architecture flow (ASCII or SVG)
“This is / This isn’t for you” section
Links to repo + roadmap + ADR decisions


Related repositories

DataPulse app (API + dashboard platform):
https://github.com/StrahinjaVasiljevic/DataPulse---Internal-Metrics-API-Dashboard-Platform [github.com]


Contributing
Contributions are welcome:

Fork the repo
Create a feature branch
Open a Pull Request with a short description and screenshots (if applicable)


License
Add a license file if you plan to make this reusable by others (MIT is a common choice for static sites).

Contact
For questions or feedback, open an issue on the repository page
