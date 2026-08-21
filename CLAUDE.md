# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

React 19 + Vite 6 single-page app for MBMC IdeaX 2026, a national hackathon in Nepal. The whole site is a terminal emulator: users type commands (or click suggestion chips) to navigate "about", "tracks", "timeline", "faq", etc. instead of scrolling a conventional page. A few commands break out of the terminal into full-screen views (a WebGL-free raycaster "museum" hall of fame, a testimonials gallery, a code-of-conduct page).

## Commands

```bash
npm install       # install dependencies
npm run dev       # Vite dev server
npm run build     # production build to dist/
npm run preview   # preview production build
```

No lint, typecheck, formatter, or test suite is configured. `@playwright/test` is a devDependency but there is no test suite using it — `test-hall.mjs` (run with `node test-hall.mjs`) is a one-off manual script that boots `vite`, drives the "hall" command with Playwright, and dumps console/HUD output for debugging the museum view; it's a debugging tool, not `npm test`.

## Architecture

**Entry**: `src/main.jsx` mounts `src/App.jsx`, which owns all state — there's no router, context, or Redux-style store. `App.jsx` runs the boot sequence (fake `[ok] mounting ...` lines), holds the terminal's `items` (rendered output) and `history` (command history), and dispatches commands.

**Command flow**: `CommandLine.jsx` collects input → `App.handleRunCommand` → `src/utils/commandHandler.js`'s `executeCommand(rawCommand, { history, onRunCommand })` parses the command name (`switch` on the first whitespace-separated token) and returns a plain result object with a `type` key (e.g. `{ type: 'TRACKS_LIST', tracks }`, `{ type: 'TEXT', text, cls }`). `App.jsx` appends an `ECHO` item plus the result to `items`, except for a few result types it intercepts to change app-level state instead of rendering inline: `CLEAR` (wipes items), `HOME` (resets and reboots), `MUSEUM`/`GALLERY`/`CONDUCT_VIEW` (switch `App`'s `view` state to a full-screen view). `OutputPane.jsx` renders `items` by switching on `item.type` — adding a new command means adding a `case` in `commandHandler.js` and a matching `case` in `OutputPane.jsx`.

**Full-screen views**: `App`'s `view` state (`'terminal' | 'museum' | 'gallery' | 'conduct'`) swaps out the whole terminal UI for `AsciiWorld`, `Testimonials`, or `Conduct`.

**Routing** uses the History API with real paths — not hashes, not react-router. `src/utils/routes.js` is the single source of truth mapping `path <-> cmd (+aliases) <-> title`; add a route there and both directions work. Running a command calls `goToRoute`, which `pushState`s the real path (`/tracks`, `/codeofconduct`, …) and updates `document.title` plus `<link rel="canonical">` so each path is independently indexable. A `popstate` listener applies the URL back onto app state for initial load and back/forward, calling through `runCommandRef` to dodge a stale closure; it passes `{ push: false }` so reacting to the URL doesn't re-push it. Legacy `#hash` links are rewritten to their path equivalent on load.

**`vercel.json` is load-bearing** — it rewrites all unmatched paths to `/`. Without it every deep link (`/tracks`, `/codeofconduct`) 404s in production, since only `/` is a real file. It was deleted once when routing was hash-based (where it genuinely wasn't needed); don't delete it again now that paths are real. `public/sitemap.xml` lists those same real paths and must be kept in step with `ROUTES`.

**Museum (`hall`/`museum` command)**: `AsciiWorld.jsx` drives a hand-rolled raycasting engine under `src/engine/` (`museum.js` builds the level grid + paintings/torches, `player.js`/`raycaster.js`/`renderer.js` do movement and 2D-canvas raycasting, `textures.js`/`font.js`/`constants.js` are supporting data) — this is a from-scratch Wolfenstein-style renderer onto a `<canvas>`, not a WebGL/three.js scene.

**Static data**: `src/utils/terminalData.js` holds `TRACKS`, the hackathon dates (`TARGET_DATE`, `DEADLINE_DATE`, etc.), and `getDynamicTimeline()`; `recapData.js` holds prior years' (2023–2025) recap stats for the `recap` command (these used to be separate static HTML sites — they're now just in-terminal data, there's no `public/2023` etc.); `testimonialsData.js` feeds both the `testimonials` command and the `Testimonials` gallery view. These are the closest thing to a single source of truth for event facts in this codebase — check them before hardcoding a date/track/prize elsewhere.

**In-progress / unwired code**: `src/components/HeroSection/ParticleCanvas.js` and all of `src/hooks/` (`useCountdown`, `useMagneticHover`, `useTilt`) exist but are not imported from `App.jsx` or any component currently in the tree — check before assuming they're live.

**No CRA/react-router/styled-components**: earlier versions of this project used Create React App with `react-router-dom` and `styled-components` (multi-page site with `/event` and `/code` routes, section-based home page). That has been fully replaced by this Vite/terminal rewrite — don't reach for CRA scripts, router APIs, or styled-components patterns here.
