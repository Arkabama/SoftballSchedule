# SoftballSchedules

Ten independent single-page team templates. The root page does not list teams, and team pages do not link to one another. Give each team its own direct URL. All pages remain public on GitHub Pages; these links and noindex hints do not provide access control. Each team page contains a roster, schedule, and its own home-screen name and icon.

## Customize

- Edit `teams/team-01/index.html` to replace the placeholder roster and schedule table rows with real entries. Repeat for the remaining teams.
- Change the team name in its HTML title, heading, footer, Apple title, and `manifest.webmanifest`. Rename its directory if desired and update the directory link in the root `index.html`.
- Replace `icon-192.png` and `icon-512.png` with square team logos of the indicated pixel sizes.
- Update `--team`, `theme-color`, and manifest colors to match the team.

These are examples and contain no real player names or game dates. All links are relative so GitHub Pages works at either a project URL or a custom domain.

## Publish with GitHub Pages

In repository Settings → Pages, select Deploy from a branch, then `main` and `/ (root)`. Open the resulting Pages URL and select a team. On Android Chrome, use Install app or Add to Home Screen in the browser menu; iOS Safari has Share → Add to Home Screen. Browser support for a separate installed app for each team can vary, particularly when all teams share one origin. Each team still gets a direct page shortcut with its own icon where the browser supports it.
