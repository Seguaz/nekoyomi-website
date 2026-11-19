# Security Policy

## Reporting a vulnerability

Please **do not** report security problems in public issues, pull requests or on Discord.

Report them privately through GitHub instead:

- Website: [Report a vulnerability](https://github.com/Seguaz/nekoyomi-website/security/advisories/new)
- App: [Report a vulnerability](https://github.com/Seguaz/Nekoyomi/security/advisories/new)

Please include what you found, how to reproduce it, and its possible impact.
We will acknowledge your report as soon as possible and keep you updated while we work on a fix.

## How this website is protected

The website is a fully static site with no server-side code, no user accounts, no forms and no cookies.

- **Strict Content-Security-Policy** on every page: only our own scripts can run, each inline script is allowed by its SHA-256 hash, and third-party scripts, iframes, plugins and form submissions are blocked.
- **No third-party scripts, analytics, trackers, fonts or images.** Everything is served from our own domain.
- **No referrer leaks** (`referrer: no-referrer`) and HTTPS-only (`upgrade-insecure-requests`, HTTPS enforced by GitHub Pages).
- **Release notes are rendered as Markdown with raw HTML disabled.**
- **Hardened build pipeline:**
  - GitHub Actions are pinned to full commit SHAs and run with least-privilege permissions.
  - Dependencies are pinned to exact versions, installed from a frozen lockfile, and must be at least 7 days old (`minimumReleaseAge`).
  - Dependency install scripts are blocked by default (pnpm 10), except for an explicit allow-list.
  - Every build is verified (`pnpm verify`) before it is deployed.
  - Dependabot keeps dependencies and actions up to date.

## Supported versions

Only the live version of the website (the `main` branch) is supported.
