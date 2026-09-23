# SoftballSchedule

One hundred single-page team templates. The main page lists all teams. Each team page has its own direct URL and does not link back to the directory or to another team. All pages are public on GitHub Pages; the `noindex` hint does not provide access control.

## Customize a team

- Edit `teams/team-01/index.html` to change its team name, roster rows, and logo placeholder. Replace `<div class="logo-placeholder" ...>Team logo</div>` with an `<img class="team-logo" src="logo.png" alt="Team 01 logo">` and add the logo file to the same folder. Change the team name in its `manifest.webmanifest` too.
- Replace `icon-192.png` and `icon-512.png` with square team icons if desired.
- Add games in that team's `schedule.json`. The next-game card automatically chooses the earliest game whose date is today or later, and updates within a minute after the date changes while the page stays open. Past games remain in the schedule. A page reload also gets the latest schedule.

Example `schedule.json`:

```json
{
  "games": [
    {"date": "2027-03-06", "time": "11:00 AM", "opponent": "Example Opponent", "location": "Field TBD"},
    {"date": "2027-03-13", "time": "1:00 PM", "opponent": "Another Opponent", "location": "Field 2"}
  ]
}
```

Use dates in `YYYY-MM-DD` format. Dates are compared using the visitor's local calendar date, so a game stays the next game for its full date. Do not put private player details on these public pages.

All links are relative and work at the GitHub Pages project URL. Publish from `main` and `/ (root)` in Settings → Pages.

Sample Team uses `/SampleTeam/`; the former `/teams/team-100/` URL redirects there.
