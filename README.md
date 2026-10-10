# Alteturia

Static umbrella website for Alteturia Studios, Hub and Media.

Run locally over HTTP (shared navigation and footer are loaded with fetch):

```powershell
python -m http.server 8000
```

Open http://localhost:8000. No build step is required.

## Routes and shared assets

- `/` — technology-building purpose, selected work and participation
- `/about/` — background, mission and organizational diagram
- `/studios/` — capabilities, development work, delivery process and enquiry
- `/hub/` — learning, mentorship, programmes and participation
- `/media/` — role and existing public channels
- `/projects/` — Alteturia Games and The Edible Shop, followed by community projects and events
- `/resources/` — events, challenges and media pathways
- `/contact/` — general, project and partnership enquiries
- `/events/` and `/challenges/` — static redirects to the preserved programme pages
- `pages/` — original programme URLs, including Future Builder Series, phases and Launch Pad
- `components/` — shared navigation and footer
- `assets/css/brand.css` — cream, blue and lime shared identity and responsive layouts
- `assets/js/script.js` — shared components, routes, registration and leaderboard behavior
- `assets/js/enquiry.js` — validated enquiry drafts, email-app handoff and copy fallback

Deploy the complete directory to a static host that serves directory index files. Link resolution uses the shared script URL and supports deployment within a subdirectory. The old `pages/about.html` URL also remains available.

## Content and integration notes

June 2026 sessions are labelled as past schedules; future phase dates are unconfirmed. Launch Pad keeps its existing single-track selection, qualification rules, webhook and leaderboard; visible Learning/Builder Track names retain the existing Sprint values required by the backend.

Project/contact forms prepare an email to the existing published contact address, with a visible draft and copy fallback. Visitors must send the email themselves. Registration uses the existing Google Apps Script endpoint; its opaque no-CORS response cannot confirm that a record was saved, so feedback describes a submitted request rather than confirmed storage.

Project descriptions cover Alteturia Games (vintage group games) and The Edible Shop (a marketplace developed for Crop Edibles). Public launch dates and unconfirmed features are not asserted. Studios registration identifiers and exact legal name are omitted pending official confirmation. Media links to existing public channels; no invented portfolio, clients, testimonials or delivery results are included. The About diagram shows the Founder and Director role without inventing a leadership name.

## Verification

Relative file links, duplicate IDs, JavaScript parsing, nested route resolution, Launch Pad track transitions, enquiry draft behavior and 17 local HTTP routes/assets were checked. Live webhook submissions and email sends were not performed. Visual browser QA remains outstanding because no browser was available in the session.

Enquiries route by type: Projects to studios@alteturia.com; learning and participation to hub@alteturia.com; media and creative work to media@alteturia.com; recruitment to recruitment@alteturia.com; privacy to privacy@alteturia.com; general and partnership enquiries to support@alteturia.com.
