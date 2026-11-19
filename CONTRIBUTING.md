# Nekoyomi Website Contributing Guide

Before submitting your contribution, please make sure to take a moment and read through the following guidelines:

- [Code of Conduct](./CODE_OF_CONDUCT.md)
- [Security Policy](./SECURITY.md)
- [Development Setup](#development-setup)
- [Project Structure](#project-structure)

## Development Setup

You will need [Node.js](https://nodejs.org) **version 20+**, and [pnpm](https://pnpm.io/installation) **version 10+** (`corepack enable` picks the exact version from `package.json`).

After cloning the repo and entering the directory, go to the `/website` folder and run:

``` bash
# Installs the exact dependency versions from the lockfile.
$ pnpm install --frozen-lockfile
```

To run the project now, run:

``` bash
# This command start a local server you can access and edit live.
$ pnpm dev
```

### Commonly used PNPM scripts

``` bash
# This command will generate a static site inside a dist directory in your project.
$ pnpm build

# Run this command to preview the built files in a local server.
$ pnpm preview

# Build + verify the security checks (Content-Security-Policy, no third-party scripts...).
$ pnpm test
```

 **Please make sure to have `pnpm test` pass successfully before submitting a PR.** Although the same tests will be run against your PR on the CI server, it is better to have it working locally.

## Security rules

The site is intentionally locked down. Pull requests that break these rules will not be merged:

- **No third-party scripts, iframes, trackers or analytics.** Everything is served from our own domain.
- **No remote images or fonts.** Put files in `website/src/public/` instead.
- **No raw HTML from external data.** Release notes are rendered as Markdown with HTML disabled.
- **New dependencies need a good reason.** Pin exact versions; the lockfile must be committed.
- `pnpm test` checks that every page has a strict Content-Security-Policy and that no inline script is left unhashed.

## Project Structure

- **`website`**: contains all the website related files.
  - **`src`**: contains all the markdown files used for the website.
    - **`.vitepress`**:
      - **`theme`**: contains custom theme files.
      - `config.ts`: main configuration file for VitePress.
    - **`public`**: files to be exposed publicly without any processing.
  - **[`dist`](https://vitepress.dev/guide/deploy)**: contains built files for distribution.
    Note this directory is only updated when a release happens or when you run the build command.
    Changes to this folder will not carry over with Git.
  - `package.json`: contains information about which plugins are installed in the project.

## Images and Videos guidelines

### Common

- Use the Android Emulator

- Use the default white theme

- Preferably use local source or a self-hosted extension if your media contains series

- Resize to have a width of 648px

### Images

- Use `.webp`

### Videos

- Use `.webm` format
  - Keep it short and small (a few seconds, under 1 MB if possible)

- Remove audio track

## Credits

Thank you to all the people who have already contributed!
This website is based on the [Aniyomi website](https://github.com/aniyomiorg/aniyomi-website), which is based on the [Mihon website](https://github.com/mihonapp/website).
